# Use Node.js 18 LTS as base image
FROM node:18-alpine AS base

# Install pnpm and Prisma CLI
RUN npm install -g pnpm
RUN npm install -g prisma

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Install all dependencies (including dev for build)
RUN pnpm install --no-frozen-lockfile

# Copy source code
COPY . .

# Copy Prisma schema
COPY prisma ./prisma/

# Generate Prisma client
RUN npx prisma generate

# Build the application with optimizations
RUN pnpm run build

# Production stage
FROM node:18-alpine AS production

# Install pnpm, Prisma CLI and additional system dependencies
RUN npm install -g pnpm prisma
RUN apk add --no-cache postgresql-client

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Install only production dependencies
RUN pnpm install --no-frozen-lockfile --prod

# Copy Prisma schema and generated client
COPY --from=base /app/prisma ./prisma/
COPY --from=base /app/node_modules/.prisma ./node_modules/.prisma/

# Copy built application from base stage
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/next.config.ts ./
COPY --from=base /app/api ./api
COPY --from=base /app/tsconfig.json ./

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Change ownership of the app directory
RUN chown -R nextjs:nodejs /app

# Switch to non-root user
USER nextjs

# Expose port 3000
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV NEXT_TELEMETRY_DISABLED=1
ENV ENVIRONMENT=production
ENV HEALTH_PATH=/home
ENV DATABASE_URL="file:./dev.db"
ENV PRISMA_GENERATE_DATAPROXY=false

# Health check with better error handling
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
  CMD node -e "const http = require('http'); const checkPath = process.env.HEALTH_PATH || '/home'; const req = http.get('http://localhost:3000' + checkPath, (res) => { process.exit(res.statusCode < 400 ? 0 : 1); }); req.on('error', () => process.exit(1)); req.setTimeout(5000, () => { req.destroy(); process.exit(1); });"

# Start both frontend and backend with proper signal handling
CMD ["sh", "-c", "pnpm start & pnpm run start:backend"]