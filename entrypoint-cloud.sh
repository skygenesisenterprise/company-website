#!/bin/sh
set -e

export PATH="/usr/local/bin:/usr/bin:/bin:${PATH}"
export NODE_ENV="${NODE_ENV:-production}"
export USE_EMBEDDED_DB="${USE_EMBEDDED_DB:-false}"

log_info() {
    echo "[INFO] $(date '+%Y-%m-%d %H:%M:%S') - $1"
}

log_success() {
    echo "[OK]   $(date '+%Y-%m-%d %H:%M:%S') - $1"
}

log_warn() {
    echo "[WARN] $(date '+%Y-%m-%d %H:%M:%S') - $1"
}

log_error() {
    echo "[ERR]  $(date '+%Y-%m-%d %H:%M:%S') - $1" >&2
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

    if [ -z "${DATABASE_URL:-}" ]; then
        export DATABASE_URL="postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}"
    fi
}

display_header() {
    echo ""
    echo "Company Website production container"
    echo ""
    log_info "Frontend: 0.0.0.0:${FRONTEND_PORT}"
    log_info "API:      0.0.0.0:${API_PORT}"
    log_info "Database: ${DB_HOST}:${DB_PORT}/${DB_NAME}"
    echo ""
}

wait_for_database() {
    log_info "Waiting for PostgreSQL..."

    retries=0
    while ! PGPASSWORD="${DB_PASSWORD}" psql -h "${DB_HOST}" -p "${DB_PORT}" -U "${DB_USER}" -d "${DB_NAME}" -c '\q' >/dev/null 2>&1; do
        retries=$((retries + 1))
        if [ "${retries}" -ge 60 ]; then
            log_error "PostgreSQL is not available after ${retries} attempts"
            return 1
        fi
        sleep 2
    done

    log_success "PostgreSQL is ready"
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

run_prisma() {
    if [ ! -f /app/prisma/schema.prisma ]; then
        log_warn "Prisma schema not found; skipping database schema setup"
        return 0
    fi

    cd /app/prisma
    prisma_bin="$(find_prisma_bin || true)"

    if [ -z "${prisma_bin}" ]; then
        log_warn "Prisma CLI is not available; skipping database schema setup"
        return 0
    fi

    log_info "Applying database migrations..."
    if ! DATABASE_URL="${DATABASE_URL}" "${prisma_bin}" migrate deploy; then
        log_warn "Prisma migrate deploy failed; continuing without schema migrations"
    fi
}

start_frontend() {
    if [ ! -d /app/out ]; then
        log_error "Static frontend build not found at /app/out"
        return 1
    fi

    log_info "Starting static frontend on port ${FRONTEND_PORT}..."
    http-server /app/out -a 0.0.0.0 -p "${FRONTEND_PORT}" -c-1 -e html &
    FRONTEND_PID=$!
    echo "${FRONTEND_PID}" > /tmp/frontend.pid
    log_success "Static frontend started with PID ${FRONTEND_PID}"
}

start_api() {
    if [ ! -x /app/server/etheriatimes-api ]; then
        log_error "Go API binary not found at /app/server/etheriatimes-api"
        return 1
    fi

    log_info "Starting Go API on port ${API_PORT}..."
    /app/server/etheriatimes-api &
    API_PID=$!
    echo "${API_PID}" > /tmp/api.pid
    log_success "Go API started with PID ${API_PID}"
}

monitor_services() {
    log_info "Services are running. Press Ctrl+C to stop."

    while true; do
        if ! kill -0 "${FRONTEND_PID}" 2>/dev/null; then
            log_error "Static frontend process stopped"
            exit 1
        fi
        if ! kill -0 "${API_PID}" 2>/dev/null; then
            log_error "Go API process stopped"
            exit 1
        fi
        sleep 5
    done
}

cleanup() {
    echo ""
    log_info "Stopping services..."

    if [ -f /tmp/frontend.pid ]; then
        kill "$(cat /tmp/frontend.pid)" 2>/dev/null || true
        rm -f /tmp/frontend.pid
    fi
    if [ -f /tmp/api.pid ]; then
        kill "$(cat /tmp/api.pid)" 2>/dev/null || true
        rm -f /tmp/api.pid
    fi

    exit 0
}

run_server() {
    configure_runtime
    display_header
    wait_for_database
    run_prisma
    start_frontend
    start_api
    monitor_services
}

run_worker() {
    configure_runtime
    wait_for_database
    log_warn "No dedicated worker process is implemented; keeping the worker container alive."
    exec tail -f /dev/null
}

trap cleanup INT TERM

case "${1:-server}" in
    server)
        shift || true
        run_server "$@"
        ;;
    worker)
        shift || true
        run_worker "$@"
        ;;
    *)
        configure_runtime
        exec "$@"
        ;;
esac
