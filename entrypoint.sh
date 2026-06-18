#!/bin/sh
set -e

# =============================================================================
# Company Website - Docker development entrypoint
# =============================================================================

export PATH="/usr/local/go/bin:/go/bin:/root/go/bin:/root/.local/share/corepack:/root/.local/share/corepack/shims:/usr/local/bin:/usr/bin:/bin:${PATH}"
export NODE_ENV="${NODE_ENV:-development}"

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

load_env_file() {
    for env_file in /app/.env ./.env /app/.env.example ./.env.example; do
        if [ -f "${env_file}" ]; then
            log_info "Loading environment from ${env_file}"
            while IFS= read -r env_line || [ -n "${env_line}" ]; do
                case "${env_line}" in
                    ""|\#*)
                        continue
                        ;;
                    PG_USER=*)
                        if [ -z "${PG_USER:-}" ]; then export PG_USER="${env_line#PG_USER=}"; fi
                        ;;
                    PG_DB=*)
                        if [ -z "${PG_DB:-}" ]; then export PG_DB="${env_line#PG_DB=}"; fi
                        ;;
                    PG_PASS=*)
                        if [ -z "${PG_PASS:-}" ]; then export PG_PASS="${env_line#PG_PASS=}"; fi
                        ;;
                    PG_HOST=*)
                        if [ -z "${PG_HOST:-}" ]; then export PG_HOST="${env_line#PG_HOST=}"; fi
                        ;;
                    PG_PORT=*)
                        if [ -z "${PG_PORT:-}" ]; then export PG_PORT="${env_line#PG_PORT=}"; fi
                        ;;
                    SECRET_KEY=*)
                        if [ -z "${SECRET_KEY:-}" ]; then export SECRET_KEY="${env_line#SECRET_KEY=}"; fi
                        ;;
                esac
            done < "${env_file}"
            return 0
        fi
    done
}

configure_database_env() {
    if [ -n "${PG_HOST:-}" ] && [ -z "${DB_HOST:-}" ]; then
        export DB_HOST="${PG_HOST}"
    fi
    if [ -n "${PG_PORT:-}" ] && [ -z "${DB_PORT:-}" ]; then
        export DB_PORT="${PG_PORT}"
    fi
    if [ -n "${PG_USER:-}" ] && [ -z "${DB_USER:-}" ]; then
        export DB_USER="${PG_USER}"
    fi
    if [ -n "${PG_DB:-}" ] && [ -z "${DB_NAME:-}" ]; then
        export DB_NAME="${PG_DB}"
    fi
    if [ -n "${PG_PASS:-}" ] && [ -z "${DB_PASSWORD:-}" ]; then
        export DB_PASSWORD="${PG_PASS}"
    fi

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
}

configure_runtime() {
    load_env_file
    configure_database_env

    if [ -n "${SECRET_KEY:-}" ] && [ -z "${SYSTEM_KEY:-}" ]; then
        export SYSTEM_KEY="${SECRET_KEY}"
    fi

    if [ -z "${USE_EMBEDDED_DB:-}" ]; then
        if [ -n "${POSTGRESQL__HOST:-}" ]; then
            export USE_EMBEDDED_DB="false"
        else
            export USE_EMBEDDED_DB="true"
        fi
    fi

    if [ -z "${DB_HOST:-}" ]; then
        if [ "${USE_EMBEDDED_DB}" = "true" ]; then
            export DB_HOST="localhost"
        else
            export DB_HOST="db"
        fi
    fi

    export DB_PORT="${DB_PORT:-5432}"
    export DB_USER="${DB_USER:-aether}"
    export DB_NAME="${DB_NAME:-etheria_account}"
    export DB_PASSWORD="${DB_PASSWORD:-${POSTGRES_PASSWORD:-password}}"
    export FRONTEND_PORT="${FRONTEND_PORT:-3000}"
    export API_PORT="${API_PORT:-8080}"
    export SERVER_PORT="${SERVER_PORT:-${API_PORT}}"

    if [ -z "${DATABASE_URL:-}" ]; then
        export DATABASE_URL="postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}"
    fi
}

display_header() {
    echo ""
    echo "Company Website development container"
    echo ""
    log_info "Frontend: http://localhost:${FRONTEND_PORT}"
    log_info "API:      http://localhost:${API_PORT}"
    log_info "Database: ${DB_HOST}:${DB_PORT}/${DB_NAME}"
    echo ""
}

setup_pnpm() {
    if command -v pnpm >/dev/null 2>&1; then
        log_success "pnpm available"
        return 0
    fi

    if command -v corepack >/dev/null 2>&1; then
        corepack enable >/dev/null 2>&1 || true
        corepack prepare pnpm@9.15.4 --activate >/dev/null 2>&1 || true
    fi

    if command -v pnpm >/dev/null 2>&1; then
        log_success "pnpm configured"
        return 0
    fi

    log_warn "pnpm is not available; falling back to npx where possible"
}

start_postgres() {
    if [ "${USE_EMBEDDED_DB}" != "true" ]; then
        return 0
    fi

    log_info "Starting embedded PostgreSQL..."

    mkdir -p /var/lib/postgresql/data /run/postgresql
    chown -R postgres:postgres /var/lib/postgresql /run/postgresql 2>/dev/null || true

    if [ ! -d /var/lib/postgresql/data/base ]; then
        su - postgres -c "initdb -D /var/lib/postgresql/data" >/dev/null
    elif [ -f /var/lib/postgresql/data/postmaster.pid ]; then
        stale_pid="$(cat /var/lib/postgresql/data/postmaster.pid 2>/dev/null || true)"
        if [ -n "${stale_pid}" ] && ! kill -0 "${stale_pid}" 2>/dev/null; then
            rm -f /var/lib/postgresql/data/postmaster.pid
        fi
    fi

    su - postgres -c "pg_ctl -D /var/lib/postgresql/data -l /var/lib/postgresql/logfile start -w" &
    POSTGRES_PID=$!
    echo "${POSTGRES_PID}" > /tmp/postgres.pid

    retries=0
    while ! su - postgres -c "psql -d postgres -c '\q'" >/dev/null 2>&1; do
        retries=$((retries + 1))
        if [ "${retries}" -ge 30 ]; then
            log_error "Embedded PostgreSQL is not available after ${retries} attempts"
            return 1
        fi
        sleep 1
    done

    su - postgres -c "psql -c \"CREATE USER ${DB_USER} WITH PASSWORD '${DB_PASSWORD}' CREATEDB;\"" 2>/dev/null || true
    su - postgres -c "psql -c \"CREATE DATABASE ${DB_NAME} OWNER ${DB_USER};\"" 2>/dev/null || true

    wait_for_database

    log_success "Embedded PostgreSQL started"
}

wait_for_database() {
    log_info "Waiting for PostgreSQL..."

    retries=0
    while ! PGPASSWORD="${DB_PASSWORD}" psql -h "${DB_HOST}" -p "${DB_PORT}" -U "${DB_USER}" -d "${DB_NAME}" -c '\q' >/dev/null 2>&1; do
        retries=$((retries + 1))
        if [ "${retries}" -ge 30 ]; then
            log_error "PostgreSQL is not available after ${retries} attempts"
            return 1
        fi
        sleep 2
    done

    log_success "PostgreSQL is ready"
}

find_prisma_dir() {
    for dir in /app/server/prisma ./server/prisma; do
        if [ -f "${dir}/schema.prisma" ]; then
            echo "${dir}"
            return 0
        fi
    done
    return 1
}

find_prisma_bin() {
    for bin in ./node_modules/.bin/prisma /app/server/prisma/node_modules/.bin/prisma ./server/prisma/node_modules/.bin/prisma; do
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
    prisma_dir="$(find_prisma_dir || true)"
    if [ -z "${prisma_dir}" ]; then
        log_warn "server/prisma/schema.prisma not found; skipping database schema setup"
        return 0
    fi

    log_info "Using Prisma database layer from ${prisma_dir}"
    cd "${prisma_dir}"

    prisma_bin="$(find_prisma_bin || true)"
    if [ -z "${prisma_bin}" ] && [ -f package.json ] && command -v npm >/dev/null 2>&1; then
        log_info "Installing Prisma dependencies..."
        if [ -f package-lock.json ]; then
            if ! npm ci --no-audit --no-fund; then
                log_warn "Prisma dependencies installation failed; skipping database schema setup"
                return 0
            fi
        else
            if ! npm install --no-audit --no-fund; then
                log_warn "Prisma dependencies installation failed; skipping database schema setup"
                return 0
            fi
        fi
        prisma_bin="$(find_prisma_bin || true)"
    fi

    if [ -z "${prisma_bin}" ]; then
        log_warn "Prisma CLI is not available; skipping database schema setup"
        return 0
    fi

    log_info "Generating Prisma client..."
    if ! DATABASE_URL="${DATABASE_URL}" "${prisma_bin}" generate; then
        log_warn "Prisma generate failed; continuing without generated Prisma client"
    fi

    log_info "Synchronizing database schema..."
    if ! DATABASE_URL="${DATABASE_URL}" "${prisma_bin}" db push --accept-data-loss; then
        log_warn "Prisma db push failed; continuing without schema synchronization"
    fi
}

start_frontend() {
    log_info "Starting Next.js on port ${FRONTEND_PORT}..."

    cd /app/app
    rm -rf .next/cache 2>/dev/null || true

    if command -v pnpm >/dev/null 2>&1; then
        pnpm next dev -p "${FRONTEND_PORT}" -H 0.0.0.0 --turbopack &
    elif command -v npx >/dev/null 2>&1; then
        npx next dev -p "${FRONTEND_PORT}" -H 0.0.0.0 --turbopack &
    else
        log_error "Neither pnpm nor npx is available"
        return 1
    fi

    NEXT_PID=$!
    echo "${NEXT_PID}" > /tmp/next.pid
    log_success "Next.js started with PID ${NEXT_PID}"
}

start_api() {
    log_info "Starting Go API on port ${API_PORT}..."

    cd /app

    if command -v air >/dev/null 2>&1 && [ -f /app/.air.toml ]; then
        air -c /app/.air.toml &
    elif [ -x /app/tmp/aether-server ]; then
        /app/tmp/aether-server &
    else
        go build -o /app/tmp/aether-server ./server/
        /app/tmp/aether-server &
    fi

    API_PID=$!
    echo "${API_PID}" > /tmp/api.pid
    log_success "Go API started with PID ${API_PID}"
}

monitor_services() {
    log_info "Services are running. Press Ctrl+C to stop."

    while true; do
        if ! kill -0 "${NEXT_PID}" 2>/dev/null; then
            log_error "Next.js process stopped"
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

    if [ -f /tmp/next.pid ]; then
        kill "$(cat /tmp/next.pid)" 2>/dev/null || true
        rm -f /tmp/next.pid
    fi
    if [ -f /tmp/api.pid ]; then
        kill "$(cat /tmp/api.pid)" 2>/dev/null || true
        rm -f /tmp/api.pid
    fi
    if [ -f /tmp/postgres.pid ]; then
        kill "$(cat /tmp/postgres.pid)" 2>/dev/null || true
        rm -f /tmp/postgres.pid
    fi

    exit 0
}

run_server() {
    configure_runtime
    display_header
    setup_pnpm

    if [ "${USE_EMBEDDED_DB}" = "true" ]; then
        start_postgres
    else
        wait_for_database
    fi

    run_prisma
    start_frontend
    start_api
    monitor_services
}

run_worker() {
    configure_runtime
    log_warn "No dedicated worker process is implemented; keeping worker container alive."
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
