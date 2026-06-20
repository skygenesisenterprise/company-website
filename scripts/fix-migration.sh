#!/bin/sh
# ───────────────────────────────────────────────────────────────────
# Migration Fix Script — Company Website
# ───────────────────────────────────────────────────────────────────
# Use this script to resolve the P3009 failed migration state.
# Run this INSIDE the server container or from a machine with psql + prisma access.
# ───────────────────────────────────────────────────────────────────
set -e

echo "=== Migration State Check ==="

# 1. Check migration state in the database
echo ""
echo "Checking _prisma_migrations table..."
PGPASSWORD="${DB_PASSWORD}" psql -h "${DB_HOST:-postgresql}" -p "${DB_PORT:-5432}" \
  -U "${DB_USER:-postgres}" -d "${DB_NAME:-postgres}" -c "
SELECT
    migration_name,
    started_at,
    finished_at,
    rolled_back_at,
    applied_steps_count,
    logs
FROM _prisma_migrations
WHERE migration_name = '00001_init';
"

# 2. Check if any tables exist
echo ""
echo "Checking if schema objects exist..."
TABLE_COUNT=$(PGPASSWORD="${DB_PASSWORD}" psql -h "${DB_HOST:-postgresql}" -p "${DB_PORT:-5432}" \
  -U "${DB_USER:-postgres}" -d "${DB_NAME:-postgres}" -t -A \
  -c "SELECT COUNT(*) FROM information_schema.tables WHERE table_schema NOT IN ('pg_catalog', 'information_schema');")

echo "Tables found (excluding system schemas): ${TABLE_COUNT}"

# 3. Resolve strategy
echo ""
echo "=== Resolution ==="
echo ""
echo "The migration 00001_init failed because the first line of migration.sql"
echo "was 'Loaded Prisma config from prisma.config.ts.' (non-SQL output)."
echo ""
echo "This has been fixed in the repository. Now we need to mark the"
echo "migration as rolled-back so it can be re-applied."
echo ""

if [ "${TABLE_COUNT}" -le 1 ]; then
    echo "No application tables found — migration did NOT create any schema."
    echo "Strategy: Mark as rolled-back, then deploy."
    echo ""
    
    echo "Running: npx prisma migrate resolve --rolled-back 00001_init"
    npx prisma migrate resolve --rolled-back 00001_init
    
    echo ""
    echo "Migration marked as rolled-back. Running: npx prisma migrate deploy"
    npx prisma migrate deploy
    
    echo ""
    echo "=== Migration successfully applied ==="
else
    echo "WARNING: ${TABLE_COUNT} tables exist in the database."
    echo "The migration may have been partially applied."
    echo ""
    echo "Manual verification required before proceeding."
    echo ""
    echo "Option 1: If the schema matches schema.prisma, run:"
    echo "  npx prisma migrate resolve --applied 00001_init"
    echo ""
    echo "Option 2: If the schema is incomplete, fix manually then run:"
    echo "  npx prisma migrate resolve --rolled-back 00001_init"
    echo "  npx prisma migrate deploy"
    echo ""
    echo "Do NOT run 'prisma migrate reset' in production."
fi
