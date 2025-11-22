import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Remove X-Powered-By header for security
  poweredByHeader: false,

  // Standalone output for containerized deployments
  output: 'standalone',

  // Image optimization settings
  images: {
    // Add domains if using external images
    domains: [],
    // Enable image optimization
    unoptimized: false,
  },

  // Turbopack configuration
  turbopack: {
    root: process.cwd(),
  },

  // Path aliases for clean imports
  webpack: (config) => {
    // Add any custom webpack config here if needed
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "./app"),
      "@api": path.resolve(__dirname, "./api"),
    };
    return config;
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },


};

export default nextConfig;