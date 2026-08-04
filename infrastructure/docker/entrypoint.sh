#!/bin/bash
# infrastructure/docker/entrypoint.sh
#
# Postgres entrypoint wrapper for the kami-sama PostgreSQL image.
#
# This script runs as the container's ENTRYPOINT and chains three steps:
#
#   1. delegate to the official postgres docker-entrypoint.sh, which performs
#      initdb, builds the runtime configuration and exec's the server.
#      We hand it off in the background so we can poll for readiness.
#
#   2. once PostgreSQL answers `psql`, invoke deploy-schema.sh.  That helper
#      hashes /prisma/schema.prisma, compares it to the hash persisted on the
#      data volume, prints "No migration needed" if they match, or runs
#      `prisma db push` otherwise.
#
#   3. `wait` on the background Postgres so the container's PID 1 stays
#      bound to the actual database process — restart policies apply to it
#      and `docker stop` cleans everything up before the container exits.

set -euo pipefail

# Ensure the original docker-entrypoint.sh from the postgres base image is
# available.  On a fresh image build it's at /usr/local/bin/docker-entrypoint.sh
# from the official image; if a previous wrap already moved it we restore it.
ORIGINAL_ENTRYPOINT="/usr/local/bin/docker-entrypoint.original.sh"
if [ ! -f "${ORIGINAL_ENTRYPOINT}" ] && [ -f /usr/local/bin/docker-entrypoint.sh ]; then
  cp /usr/local/bin/docker-entrypoint.sh "${ORIGINAL_ENTRYPOINT}"
fi

if [ ! -f "${ORIGINAL_ENTRYPOINT}" ]; then
  echo "❌ Original Postgres entrypoint not found at ${ORIGINAL_ENTRYPOINT}" >&2
  echo "    Make sure the Dockerfile copies infrastructure/docker/entrypoint.sh to /usr/local/bin/." >&2
  exit 1
fi

echo "🚀 Starting PostgreSQL…"
"${ORIGINAL_ENTRYPOINT}" "$@" &
PG_PID=$!

# ---------------------------------------------------------------------------
# Polling loop: wait until psql can answer '\q'.
# ---------------------------------------------------------------------------
PG_HOST="${PG_HOST:-127.0.0.1}"
PG_USER="${POSTGRES_USER:-postgres}"
PG_DATABASE="${POSTGRES_DB:-postgres}"
PG_PORT="${POSTGRES_PORT:-5432}"
export PGPASSWORD="${POSTGRES_PASSWORD:-${PGPASSWORD:-}}"

echo "⏳ Waiting for PostgreSQL ${PG_USER}@${PG_HOST}:${PG_PORT}/${PG_DATABASE}…"
for i in $(seq 1 90); do
  if psql -h "${PG_HOST}" -p "${PG_PORT}" -U "${PG_USER}" -d "${PG_DATABASE}" -c '\q' >/dev/null 2>&1; then
    echo "✅ PostgreSQL is ready"
    break
  fi
  if ! kill -0 "${PG_PID}" 2>/dev/null; then
    echo "❌ PostgreSQL process exited before becoming ready" >&2
    exit 1
  fi
  sleep 1
done

if ! psql -h "${PG_HOST}" -p "${PG_PORT}" -U "${PG_USER}" -d "${PG_DATABASE}" -c '\q' >/dev/null 2>&1; then
  echo "❌ PostgreSQL did not become ready within 90 seconds" >&2
  exit 1
fi

# ---------------------------------------------------------------------------
# Schema deployment (idempotent, prints "No migration needed" if unchanged).
# ---------------------------------------------------------------------------
if [ -x /usr/local/bin/deploy-schema.sh ]; then
  /usr/local/bin/deploy-schema.sh
else
  echo "ℹ️  deploy-schema.sh not bundled — skipping Prisma schema pre-flight"
fi

# ---------------------------------------------------------------------------
# Keep the container alive by waiting on the Postgres process.
# ---------------------------------------------------------------------------
echo "🟢 Container is up — following PostgreSQL PID ${PG_PID}"
trap 'echo "🛑 Stopping PostgreSQL (PID ${PG_PID})…"; kill -TERM "${PG_PID}" 2>/dev/null || true; wait "${PG_PID}" || true' TERM INT
wait "${PG_PID}"
exit $?
