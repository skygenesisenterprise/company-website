#!/bin/sh
set -e

export PATH="/usr/local/bin:/usr/bin:/bin:${PATH}"
export NODE_ENV="${NODE_ENV:-production}"
export USE_EMBEDDED_DB="${USE_EMBEDDED_DB:-false}"
export LOG_LEVEL="${LOG_LEVEL:-info}"
export HTTP_ACCESS_LOGS="${HTTP_ACCESS_LOGS:-false}"
export API_ACCESS_LOGS="${API_ACCESS_LOGS:-false}"
export PRISMA_SCHEMA_DEPLOY="${PRISMA_SCHEMA_DEPLOY:-true}"
export PRISMA_SCHEMA_DEPLOY_STRATEGY="${PRISMA_SCHEMA_DEPLOY_STRATEGY:-push}"
export ALLOW_MIGRATION_FAILURE="${ALLOW_MIGRATION_FAILURE:-false}"

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

configure_redis_from_url() {
    if [ -z "${REDIS_URL:-}" ]; then
        return 0
    fi

    redis_url="${REDIS_URL#redis://}"
    redis_url="${redis_url#rediss://}"
    redis_authority="${redis_url%%/*}"
    redis_db="${redis_url#*/}"
    redis_db="${redis_db%%\?*}"

    credentials=""
    redis_host_port="${redis_authority}"
    if [ "${redis_authority#*@}" != "${redis_authority}" ]; then
        credentials="${redis_authority%@*}"
        redis_host_port="${redis_authority#*@}"
    fi

    if [ -n "${credentials}" ]; then
        case "${credentials}" in
            *:*)
                export REDIS_PASSWORD="${credentials#*:}"
                ;;
            *)
                export REDIS_PASSWORD="${credentials}"
                ;;
        esac
    fi

    case "${redis_host_port}" in
        \[*\]:*)
            export REDIS_HOST="${redis_host_port%\]:*}"
            export REDIS_HOST="${REDIS_HOST#\[}"
            export REDIS_PORT="${redis_host_port##*\]:}"
            ;;
        *:*)
            export REDIS_HOST="${redis_host_port%%:*}"
            export REDIS_PORT="${redis_host_port#*:}"
            ;;
        *)
            export REDIS_HOST="${redis_host_port}"
            ;;
    esac

    if [ -n "${redis_db}" ] && [ "${redis_db}" != "${redis_url}" ]; then
        export REDIS_DB="${redis_db}"
    fi
}

configure_runtime() {
    configure_redis_from_url

    if [ -n "${SECRET_KEY:-}" ] && [ -z "${SYSTEM_KEY:-}" ]; then
        export SYSTEM_KEY="${SECRET_KEY}"
    fi

    export FRONTEND_PORT="${FRONTEND_PORT:-3000}"
    export API_PORT="${API_PORT:-8080}"
    export SERVER_PORT="${SERVER_PORT:-${API_PORT}}"
    export REDIS_PORT="${REDIS_PORT:-6379}"
    export REDIS_DB="${REDIS_DB:-0}"
    export REDIS_KEY_PREFIX="${REDIS_KEY_PREFIX:-company-website:v1}"
    export REDIS_ENABLED="${REDIS_ENABLED:-true}"
    export REDIS_REQUIRED="${REDIS_REQUIRED:-false}"
    export GIN_MODE="${GIN_MODE:-release}"
    export ENVIRONMENT="${ENVIRONMENT:-production}"
    export LOG_LEVEL="${LOG_LEVEL:-info}"
    export HTTP_ACCESS_LOGS="${HTTP_ACCESS_LOGS:-false}"
    export API_ACCESS_LOGS="${API_ACCESS_LOGS:-false}"
    export PRISMA_SCHEMA_DEPLOY="${PRISMA_SCHEMA_DEPLOY:-true}"
    export PRISMA_SCHEMA_DEPLOY_STRATEGY="${PRISMA_SCHEMA_DEPLOY_STRATEGY:-push}"
    export ALLOW_MIGRATION_FAILURE="${ALLOW_MIGRATION_FAILURE:-false}"

    case "${LOG_LEVEL}" in
        debug|info|warn|error)
            ;;
        *)
            log_warn "Invalid LOG_LEVEL '${LOG_LEVEL}'; expected debug, info, warn, or error"
            ;;
    esac

    case "${PRISMA_SCHEMA_DEPLOY}" in
        true|false)
            ;;
        *)
            log_warn "Invalid PRISMA_SCHEMA_DEPLOY '${PRISMA_SCHEMA_DEPLOY}'; using true"
            export PRISMA_SCHEMA_DEPLOY="true"
            ;;
    esac

    case "${PRISMA_SCHEMA_DEPLOY_STRATEGY}" in
        push|migrate)
            ;;
        *)
            log_warn "Invalid PRISMA_SCHEMA_DEPLOY_STRATEGY '${PRISMA_SCHEMA_DEPLOY_STRATEGY}'; using push"
            export PRISMA_SCHEMA_DEPLOY_STRATEGY="push"
            ;;
    esac

    case "${ALLOW_MIGRATION_FAILURE}" in
        true|false)
            ;;
        *)
            log_warn "Invalid ALLOW_MIGRATION_FAILURE '${ALLOW_MIGRATION_FAILURE}'; using false"
            export ALLOW_MIGRATION_FAILURE="false"
            ;;
    esac
}

log_redis_configuration() {
    if [ "${REDIS_ENABLED:-false}" = "true" ]; then
        log_info "Redis enabled at ${REDIS_HOST:-redis}:${REDIS_PORT:-6379}/${REDIS_DB:-0}"
        if [ -z "${REDIS_URL:-}" ]; then
            log_warn "REDIS_URL is not configured; backend will use Redis host/port settings"
        fi
    else
        log_info "Redis disabled"
    fi

    if [ "${REDIS_ENABLED:-false}" = "true" ] &&
       [ "${REDIS_REQUIRED:-false}" != "true" ]; then
        log_warn "Redis is optional; backend may continue without cache"
    fi
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

    if command -v npx >/dev/null 2>&1; then
        echo "npx prisma"
        return 0
    fi

    return 1
}

run_prisma_schema_deploy() {
    if [ "${PRISMA_SCHEMA_DEPLOY:-true}" != "true" ]; then
        log_info "Prisma schema deployment disabled"
        return 0
    fi

    if [ -z "${DATABASE_URL:-}" ]; then
        log_error "DATABASE_URL is required to deploy the Prisma schema"
        return 1
    fi

    if [ ! -f /app/prisma/schema.prisma ]; then
        log_error "Prisma schema not found at /app/prisma/schema.prisma"
        return 1
    fi

    cd /app/prisma
    prisma_bin="$(find_prisma_bin || true)"

    if [ -z "${prisma_bin}" ]; then
        log_error "Prisma CLI is not available"
        return 1
    fi

    case "${PRISMA_SCHEMA_DEPLOY_STRATEGY:-push}" in
        migrate)
            log_info "Deploying Prisma migrations to external database"
            # shellcheck disable=SC2086
            DATABASE_URL="${DATABASE_URL}" ${prisma_bin} migrate deploy
            ;;
        push)
            log_info "Pushing Prisma schema to external database"
            log_warn "Prisma db push may alter the external database schema directly"
            # shellcheck disable=SC2086
            DATABASE_URL="${DATABASE_URL}" ${prisma_bin} db push --accept-data-loss --skip-generate
            ;;
    esac

    log_info "Prisma database schema is deployed"
}

run_server() {
    configure_runtime

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
    log_info "Backend API configured for 0.0.0.0:${SERVER_PORT}"

    if [ ! -x /app/server/etheriatimes-api ]; then
        log_error "Go backend binary not found at /app/server/etheriatimes-api"
        return 1
    fi

    if [ -z "${DATABASE_URL:-}" ]; then
        log_error "DATABASE_URL is required for the Go API worker"
        return 1
    fi

    if ! run_prisma_schema_deploy; then
        if [ "${ALLOW_MIGRATION_FAILURE}" = "true" ]; then
            log_warn "Prisma schema deployment failed; continuing because ALLOW_MIGRATION_FAILURE=true"
        else
            log_error "Prisma schema deployment failed"
            return 1
        fi
    fi

    log_redis_configuration
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
