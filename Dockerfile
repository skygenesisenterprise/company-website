# Use Node.js 18 LTS as base image
FROM node:18-alpine AS base

# Install pnpm and system dependencies for Prisma
RUN npm install -g pnpm
RUN apk add --no-cache openssl-dev

# Configure system limits to prevent "Too many open files" error
# Create limits.conf directory and file for Alpine
RUN mkdir -p /etc/security
RUN echo "* soft nofile 65536" >> /etc/security/limits.conf
RUN echo "* hard nofile 65536" >> /etc/security/limits.conf
RUN echo "root soft nofile 65536" >> /etc/security/limits.conf
RUN echo "root hard nofile 65536" >> /etc/security/limits.conf

# Set kernel parameters for better file handling
RUN sysctl -w fs.file-max=2097152
RUN echo "fs.file-max=2097152" >> /etc/sysctl.conf

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Install all dependencies (including dev for build)
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build application
RUN pnpm run build 

# Production stage
FROM node:18-alpine AS production

# Install pnpm and system dependencies
RUN npm install -g pnpm
RUN apk add --no-cache openssl-dev

# Configure system limits to prevent "Too many open files" error
# Create limits.conf directory and file for Alpine
RUN mkdir -p /etc/security
RUN echo "* soft nofile 65536" >> /etc/security/limits.conf
RUN echo "* hard nofile 65536" >> /etc/security/limits.conf
RUN echo "root soft nofile 65536" >> /etc/security/limits.conf
RUN echo "root hard nofile 65536" >> /etc/security/limits.conf

# Set kernel parameters for better file handling
RUN sysctl -w fs.file-max=2097152
RUN echo "fs.file-max=2097152" >> /etc/sysctl.conf

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Install only production dependencies
RUN pnpm install --frozen-lockfile --prod

# Copy built application from base stage
COPY --from=base /app/.next/standalone ./
COPY --from=base /app/.next/static ./.next/static
COPY --from=base /app/public ./public

# Create non-root user with proper limits
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Set user-specific limits
RUN echo "nextjs soft nofile 65536" >> /etc/security/limits.conf
RUN echo "nextjs hard nofile 65536" >> /etc/security/limits.conf

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

# Health check for frontend only
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
  CMD node -e "const http = require('http'); const checkPath = process.env.HEALTH_PATH || '/home'; const req = http.get('http://localhost:3000' + checkPath, (res) => { process.exit(res.statusCode < 400 ? 0 : 1); }); req.on('error', () => process.exit(1)); req.setTimeout(5000, () => { req.destroy(); process.exit(1); });"

# Start the standalone server
CMD ["node", "server.js"]