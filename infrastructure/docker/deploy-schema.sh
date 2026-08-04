#!/bin/bash
# infrastructure/docker/deploy-schema.sh
#
# Idempotent Prisma schema deployment helper for the kami-sama Postgres
# container.  Called by entrypoint.sh once PostgreSQL has finished initialising
# and is accepting connections.
#
# Behaviour:
#   - computes a SHA-256 of the active Prisma schema file
#   - compares it to a hash file persisted on the database volume
#   - if the hashes match, prints "No migration needed" and exits cleanly
#   - otherwise runs `prisma migrate deploy` to apply pending migrations
#   - persists the new hash on the volume so the next recreate is a no-op
#
# Safety:
#   Uses Prisma Migrate (not db push) so only explicit migration files are
#   applied. No --accept-data-loss — schema changes that would destroy data
#   must be written as intentional migration steps.
#
# Environment variables (consumed):
#   SCHEMA_PATH    Path to schema.prisma (default: /prisma/schema.prisma)
#   PRISMA_DIR     Path to the Prisma workspace (default: /prisma)
#   HASH_FILE      File where the last-applied hash is stored
#                  (default: $PGDATA/.prisma_schema.sha256)
#   DATABASE_URL   Optional: pre-built Postgres connection URL
#   PG_HOST / PG_PORT / PG_USER / PG_PASSWORD / PG_DATABASE
#                  Connection components used when DATABASE_URL is omitted.
#
# Exit codes:
#   0  no work to do OR schema deployed successfully
#   non-zero  unrecoverable error (caller should surface and roll back).

set -euo pipefail

SCHEMA_PATH="${SCHEMA_PATH:-/prisma/schema.prisma}"
PRISMA_DIR="${PRISMA_DIR:-/prisma}"
PGDATA_DIR="${PGDATA:-/var/lib/postgresql/data}"
HASH_FILE="${HASH_FILE:-${PGDATA_DIR}/.prisma_schema.sha256}"

PG_HOST="${PG_HOST:-127.0.0.1}"
PG_PORT="${PG_PORT:-5432}"
PG_USER="${POSTGRES_USER:-${PG_USER:-postgres}}"
PG_PASSWORD="${POSTGRES_PASSWORD:-${PGPASSWORD:-}}"
PG_DATABASE="${POSTGRES_DB:-${PGDATABASE:-postgres}}"

# ---------------------------------------------------------------------------
# 1. Sanity checks.
# ---------------------------------------------------------------------------
if [ ! -f "${SCHEMA_PATH}" ]; then
  echo "⚠️  Schema not found at ${SCHEMA_PATH} — skipping pre-flight"
  exit 0
fi

if ! command -v psql >/dev/null 2>&1; then
  echo "⚠️  psql is not installed in this image — skipping pre-flight"
  exit 0
fi

if ! command -v sha256sum >/dev/null 2>&1; then
  echo "⚠️  sha256sum is not available — skipping pre-flight"
  exit 0
fi

# ---------------------------------------------------------------------------
# 2. Compute the schema hash.
# ---------------------------------------------------------------------------
CURRENT_HASH=$(sha256sum "${SCHEMA_PATH}" | awk '{print $1}')
PREVIOUS_HASH=""
if [ -f "${HASH_FILE}" ]; then
  PREVIOUS_HASH=$(cat "${HASH_FILE}" 2>/dev/null || true)
fi

echo ""
echo "🔍 Prisma schema checkup"
echo "   • schema file : ${SCHEMA_PATH}"
echo "   • target db   : postgresql://${PG_USER}@${PG_HOST}:${PG_PORT}/${PG_DATABASE}"
echo "   • current sha : ${CURRENT_HASH}"
if [ -n "${PREVIOUS_HASH}" ]; then
  echo "   • previous sha: ${PREVIOUS_HASH}"
else
  echo "   • previous sha: <none> (first run with this volume)"
fi

# ---------------------------------------------------------------------------
# 3. Diff detection.
# ---------------------------------------------------------------------------
if [ -n "${PREVIOUS_HASH}" ] && [ "${CURRENT_HASH}" = "${PREVIOUS_HASH}" ]; then
  printf '\033[32m✅ No migration needed — schema is unchanged.\033[0m\n'
  echo ""
  exit 0
fi

# ---------------------------------------------------------------------------
# 4. Push the new schema.
# ---------------------------------------------------------------------------
echo ""
echo "🚀 Schema changed — applying migration…"

# Build DATABASE_URL if it wasn't pre-set.
if [ -z "${DATABASE_URL:-}" ]; then
  export DATABASE_URL="postgresql://${PG_USER}:${PG_PASSWORD}@${PG_HOST}:${PG_PORT}/${PG_DATABASE}?schema=public"
fi

  # Print a structural diff summary when possible for human readability.
  echo "   • mode        : prisma migrate deploy"
if command -v npx >/dev/null 2>&1 && [ -f "${PRISMA_DIR}/package.json" ]; then
  echo ""
  echo "📐 Diff summary (schema.prisma → database):"
  (
    cd "${PRISMA_DIR}"
    # `prisma migrate diff` is non-destructive; if it errors we keep going.
    npx --no-install prisma migrate diff \
      --from-schema-datasource "${DATABASE_URL}" \
      --to-schema-datamodel "${SCHEMA_PATH}" \
      --script 2>/dev/null \
      | head -40 || true
  )
fi

(
  cd "${PRISMA_DIR}"
  # Generate the Prisma client first so tools can introspect it later.
  npx --no-install prisma generate >/dev/null 2>&1 || true
  # Apply pending migrations safely. Only unapplied migrations from the
  # migrations/ directory are executed — no data loss, no --accept-data-loss.
  # If no migrations exist yet this is a no-op.
  npx --no-install prisma migrate deploy
)

# ---------------------------------------------------------------------------
# 5. Persist the hash so the next recreate is detected as a no-op.
# ---------------------------------------------------------------------------
mkdir -p "$(dirname "${HASH_FILE}")"
echo "${CURRENT_HASH}" > "${HASH_FILE}"

printf '\033[32m✅ Migration applied successfully.\033[0m\n'
echo "   • new hash stored at ${HASH_FILE}"
echo ""
exit 0
