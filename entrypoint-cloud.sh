#!/bin/sh
set -e

export PATH="/usr/local/bin:/usr/bin:/bin:${PATH}"
export NODE_ENV="${NODE_ENV:-production}"
export USE_EMBEDDED_DB="${USE_EMBEDDED_DB:-false}"
export LOG_LEVEL="${LOG_LEVEL:-info}"
export HTTP_ACCESS_LOGS="${HTTP_ACCESS_LOGS:-false}"
export API_ACCESS_LOGS="${API_ACCESS_LOGS:-false}"
export WORKER_WAIT_FOR_DB="${WORKER_WAIT_FOR_DB:-false}"

timestamp_utc() {
    date -u '+%Y-%m-%dT%H:%M:%SZ'
}

should_log() {
    requested_level="$1"

    case "${LOG_LEVEL:-info}" in
        debug)
            return 0
            ;;
        info)
            [ "${requested_level}" != "debug" ]
            ;;
        warn)
            [ "${requested_level}" = "warn" ] || [ "${requested_level}" = "error" ]
            ;;
        error)
            [ "${requested_level}" = "error" ]
            ;;
        *)
            return 0
            ;;
    esac
}

log_debug() {
    if should_log debug; then
        echo "[DEBUG] $(timestamp_utc) - $1"
    fi
}

log_info() {
    if should_log info; then
        echo "[INFO] $(timestamp_utc) - $1"
    fi
}

log_success() {
    log_info "$1"
}

log_warn() {
    if should_log warn; then
        echo "[WARN] $(timestamp_utc) - $1" >&2
    fi
}

log_error() {
    if should_log error; then
        echo "[ERROR] $(timestamp_utc) - $1" >&2
    fi
}

configure_database_from_url() {
    if [ -z "${DATABASE_URL:-}" ] || [ -n "${DB_HOST:-}" ]; then
        return 0
    fi

    database_url="${DATABASE_URL#postgresql://}"
    database_url="${database_url#postgres://}"

    credentials="${database_url%@*}"
    host_and_path="${database_url#*@}"
    host_port="${host_and_path%%/*}"
    database_name="${host_and_path#*/}"
    database_name="${database_name%%\?*}"

    if [ "${credentials}" != "${database_url}" ]; then
        export DB_USER="${DB_USER:-${credentials%%:*}}"
        export DB_PASSWORD="${DB_PASSWORD:-${credentials#*:}}"
    fi

    if [ "${host_port}" != "${host_port#*:}" ]; then
        export DB_HOST="${DB_HOST:-${host_port%%:*}}"
        export DB_PORT="${DB_PORT:-${host_port#*:}}"
    else
        export DB_HOST="${DB_HOST:-${host_port}}"
    fi

    export DB_NAME="${DB_NAME:-${database_name}}"
}

configure_runtime() {
    configure_database_from_url

    if [ -n "${POSTGRESQL__HOST:-}" ] && [ -z "${DB_HOST:-}" ]; then
        export DB_HOST="${POSTGRESQL__HOST}"
    fi
    if [ -n "${POSTGRESQL__USER:-}" ] && [ -z "${DB_USER:-}" ]; then
        export DB_USER="${POSTGRESQL__USER}"
    fi
    if [ -n "${POSTGRESQL__NAME:-}" ] && [ -z "${DB_NAME:-}" ]; then
        export DB_NAME="${POSTGRESQL__NAME}"
    fi
    if [ -n "${POSTGRESQL__PASSWORD:-}" ] && [ -z "${DB_PASSWORD:-}" ]; then
        export DB_PASSWORD="${POSTGRESQL__PASSWORD}"
    fi
    if [ -n "${SECRET_KEY:-}" ] && [ -z "${SYSTEM_KEY:-}" ]; then
        export SYSTEM_KEY="${SECRET_KEY}"
    fi
    if [ -n "${POSTGRES_HOST:-}" ] && [ -z "${DB_HOST:-}" ]; then
        export DB_HOST="${POSTGRES_HOST}"
    fi
    if [ -n "${POSTGRES_USER:-}" ] && [ -z "${DB_USER:-}" ]; then
        export DB_USER="${POSTGRES_USER}"
    fi
    if [ -n "${POSTGRES_DB:-}" ] && [ -z "${DB_NAME:-}" ]; then
        export DB_NAME="${POSTGRES_DB}"
    fi

    export DB_HOST="${DB_HOST:-postgresql}"
    export DB_PORT="${DB_PORT:-5432}"
    export DB_USER="${DB_USER:-postgres}"
    export DB_NAME="${DB_NAME:-postgres}"
    export DB_PASSWORD="${DB_PASSWORD:-${POSTGRES_PASSWORD:-password}}"
    export FRONTEND_PORT="${FRONTEND_PORT:-3000}"
    export API_PORT="${API_PORT:-8080}"
    export SERVER_PORT="${SERVER_PORT:-${API_PORT}}"
    export GIN_MODE="${GIN_MODE:-release}"
    export ENVIRONMENT="${ENVIRONMENT:-production}"
    export LOG_LEVEL="${LOG_LEVEL:-info}"
    export HTTP_ACCESS_LOGS="${HTTP_ACCESS_LOGS:-false}"
    export API_ACCESS_LOGS="${API_ACCESS_LOGS:-false}"
    export WORKER_WAIT_FOR_DB="${WORKER_WAIT_FOR_DB:-false}"

    case "${LOG_LEVEL}" in
        debug|info|warn|error)
            ;;
        *)
            log_warn "Invalid LOG_LEVEL '${LOG_LEVEL}'; expected debug, info, warn, or error"
            ;;
    esac

    if [ -z "${DATABASE_URL:-}" ]; then
        export DATABASE_URL="postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}"
    fi
}

wait_for_database() {
    log_info "Waiting for PostgreSQL"

    retries=0
    while ! last_error="$(PGPASSWORD="${DB_PASSWORD}" psql -h "${DB_HOST}" -p "${DB_PORT}" -U "${DB_USER}" -d "${DB_NAME}" -c '\q' 2>&1 >/dev/null)"; do
        retries=$((retries + 1))
        if [ "${retries}" -ge 60 ]; then
            log_error "PostgreSQL is not available after ${retries} attempts"
            if [ -n "${last_error}" ]; then
                log_error "Last PostgreSQL check failed for ${DB_HOST}:${DB_PORT}/${DB_NAME}: ${last_error}"
            fi
            return 1
        fi
        sleep 2
    done

    log_info "PostgreSQL is ready"
}

find_prisma_bin() {
    for bin in /app/prisma/node_modules/.bin/prisma ./node_modules/.bin/prisma; do
        if [ -x "${bin}" ]; then
            echo "${bin}"
            return 0
        fi
    done

    if command -v prisma >/dev/null 2>&1; then
        command -v prisma
        return 0
    fi

    return 1
}

log_prisma_migrate_failure_reason() {
    output_file="$1"

    if grep -q 'P3009' "${output_file}"; then
        log_error "Prisma migration is blocked by a failed migration recorded in _prisma_migrations (P3009)"
        log_error "Stop the server restart loop, inspect PostgreSQL, then repair with prisma migrate resolve before restarting"
        return 0
    fi

    if grep -Eq 'P1001|Can.t reach database server|Connection refused|connection refused|could not connect|timeout expired|Name does not resolve|Temporary failure in name resolution' "${output_file}"; then
        log_error "Prisma migrate deploy could not connect to PostgreSQL"
        log_error "Verify DATABASE_URL, PostgreSQL availability, DNS, and network access from this container"
        return 0
    fi

    log_error "Prisma migrate deploy failed while applying or validating a migration"
    log_error "Review the Prisma output above for the SQL or migration error details"
}

run_prisma() {
    if [ ! -f /app/prisma/schema.prisma ]; then
        log_error "Prisma schema not found"
        return 1
    fi

    cd /app/prisma
    prisma_bin="$(find_prisma_bin || true)"

    if [ -z "${prisma_bin}" ]; then
        log_error "Prisma CLI is not available"
        return 1
    fi

    log_info "Applying database migrations"
    migration_output="$(mktemp)"
    if ! DATABASE_URL="${DATABASE_URL}" "${prisma_bin}" migrate deploy >"${migration_output}" 2>&1; then
        cat "${migration_output}" >&2
        log_prisma_migrate_failure_reason "${migration_output}"
        log_error "Prisma migrate deploy failed"
        rm -f "${migration_output}"
        return 1
    fi

    cat "${migration_output}"
    rm -f "${migration_output}"
    log_info "Database migrations applied"
}

run_server() {
    export FRONTEND_PORT="${FRONTEND_PORT:-3000}"
    export HTTP_ACCESS_LOGS="${HTTP_ACCESS_LOGS:-false}"
    export LOG_LEVEL="${LOG_LEVEL:-info}"

    log_info "Company Website server starting"
    log_info "Frontend listening on 0.0.0.0:${FRONTEND_PORT}"

    if [ ! -d /app/out ]; then
        log_error "Static frontend build not found at /app/out"
        return 1
    fi

    http_server_args="/app/out -a 0.0.0.0 -p ${FRONTEND_PORT} -c-1 -e html"
    if [ "${HTTP_ACCESS_LOGS}" != "true" ]; then
        http_server_args="${http_server_args} --silent"
    fi

    log_info "Starting static frontend"

    # shellcheck disable=SC2086
    exec http-server ${http_server_args}
}

run_worker() {
    configure_runtime

    log_info "Company Website worker starting"
    log_info "Backend API listening on 0.0.0.0:${API_PORT}"
    log_info "Database target: ${DB_HOST}:${DB_PORT}/${DB_NAME}"

    wait_for_database

    if ! run_prisma; then
        log_error "Database migrations failed"
        return 1
    fi

    if [ ! -x /app/server/etheriatimes-api ]; then
        log_error "Go backend binary not found at /app/server/etheriatimes-api"
        return 1
    fi

    if [ "${REDIS_ENABLED:-false}" = "true" ]; then
        log_info "Redis configuration enabled"
    fi
    if [ "${REDIS_REQUIRED:-false}" != "true" ]; then
        log_warn "Redis is optional and may be unavailable"
    fi

    log_info "Starting Go backend"

    exec /app/server/etheriatimes-api
}

role="${1:-server}"

case "${role}" in
    server)
        shift || true
        run_server "$@"
        ;;
    worker)
        shift || true
        run_worker "$@"
        ;;
    *)
        exec "$@"
        ;;
esac
