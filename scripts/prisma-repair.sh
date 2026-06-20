#!/bin/sh
set -eu

MIGRATION_NAME="${MIGRATION_NAME:-00001_init}"

usage() {
    cat <<EOF
Usage: $0 <command>

Commands:
  inspect          Show Prisma migration state and existing public objects
  resolve-rolled-back
                   Mark ${MIGRATION_NAME} as rolled back with prisma migrate resolve
  deploy           Run prisma migrate deploy
  status           Run prisma migrate status
  repair-rolled-back
                   Run resolve-rolled-back, deploy, then status

This script never runs destructive commands. It does not print DATABASE_URL.
Run it from the server image/container or another maintenance container with
Prisma, psql, and DATABASE_URL available.
EOF
}

require_database_url() {
    if [ -z "${DATABASE_URL:-}" ]; then
        echo "ERROR: DATABASE_URL is required and must not be printed." >&2
        exit 1
    fi
}

prisma_dir() {
    if [ -f /app/prisma/schema.prisma ]; then
        echo /app/prisma
        return 0
    fi

    if [ -f server/prisma/schema.prisma ]; then
        echo server/prisma
        return 0
    fi

    if [ -f schema.prisma ]; then
        pwd
        return 0
    fi

    echo "ERROR: Could not find schema.prisma." >&2
    exit 1
}

run_psql() {
    require_database_url
    psql "${DATABASE_URL}" -v ON_ERROR_STOP=1 "$@"
}

run_prisma() {
    require_database_url
    cd "$(prisma_dir)"
    if [ -x ./node_modules/.bin/prisma ]; then
        DATABASE_URL="${DATABASE_URL}" ./node_modules/.bin/prisma "$@"
    else
        DATABASE_URL="${DATABASE_URL}" npx prisma "$@"
    fi
}

inspect() {
    require_database_url

    echo "== Prisma migration row: ${MIGRATION_NAME} =="
    run_psql -c "
SELECT
    id,
    migration_name,
    checksum,
    started_at,
    finished_at,
    rolled_back_at,
    applied_steps_count,
    logs
FROM \"_prisma_migrations\"
WHERE migration_name = '${MIGRATION_NAME}';
"

    echo
    echo "== Public tables =="
    run_psql -c "
SELECT tablename
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY tablename;
"

    echo
    echo "== Public enums =="
    run_psql -c "
SELECT typname
FROM pg_type
WHERE typnamespace = 'public'::regnamespace
  AND typtype = 'e'
ORDER BY typname;
"

    echo
    echo "== Quick object checks =="
    run_psql -c "
SELECT
    to_regclass('public.\"User\"') AS user_table,
    to_regclass('public.\"Organization\"') AS organization_table,
    EXISTS (
        SELECT 1
        FROM pg_type
        WHERE typname = 'UserRole'
    ) AS user_role_enum;
"

    echo
    echo "== Estimated live rows =="
    run_psql -c "
SELECT
    schemaname,
    relname,
    n_live_tup
FROM pg_stat_user_tables
ORDER BY relname;
"
}

case "${1:-}" in
    inspect)
        inspect
        ;;
    resolve-rolled-back)
        run_prisma migrate resolve --rolled-back "${MIGRATION_NAME}"
        ;;
    deploy)
        run_prisma migrate deploy
        ;;
    status)
        run_prisma migrate status
        ;;
    repair-rolled-back)
        run_prisma migrate resolve --rolled-back "${MIGRATION_NAME}"
        run_prisma migrate deploy
        run_prisma migrate status
        ;;
    -h|--help|help|"")
        usage
        ;;
    *)
        echo "ERROR: Unknown command: $1" >&2
        usage >&2
        exit 1
        ;;
esac
