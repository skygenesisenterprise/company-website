import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");
const isProduction = process.env.NODE_ENV === "production";
const isStaticWebBuild = process.env.BUILD_WEB_STATIC === "true";

const nextConfig: NextConfig = {
  // Vidstack ships as ESM with non-standard `exports` conditions (e.g.
  // `development`, `deno`) and is verified to need transpilation under
  // Next.js 16 / Turbopack. See https://docs.vidstack.io/player/getting-started/installation/nextjs
  transpilePackages: ["@vidstack/react", "vidstack"],
  turbopack: {
    root: "../",
  },
    allowedDevOrigins: ["skygenesisenterprise.com", "api.skygenesisenterprise.com", "sso.skygenesisenterprise.com", "skygenesisenterprise.com.localhost", "api.skygenesisenterprise.com.localhost", "sso.skygenesisenterprise.com.localhost", "studios.skygenesisenterprise.com.localhost"],
  outputFileTracingExcludes: {
    "*": ["test/**"],
  },

  reactStrictMode: true,
  poweredByHeader: false,

  ...(isStaticWebBuild
    ? {
        output: "export",
        trailingSlash: true,
        images: {
          unoptimized: true,
          remotePatterns: [
            { protocol: "https", hostname: "skygenesisenterprise.com", pathname: "/**" },
            { protocol: "https", hostname: "api.skygenesisenterprise.com", pathname: "/**" },
            { protocol: "https", hostname: "avatars.githubusercontent.com", pathname: "/**" },
            { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
            { protocol: "http", hostname: "127.0.0.1", pathname: "/**" },
            { protocol: "http", hostname: "localhost", pathname: "/**" },
          ],
        },
      }
    : {
        ...(isProduction && {
          output: "standalone",
          ...(process.env.ASSET_PREFIX && { assetPrefix: process.env.ASSET_PREFIX }),
        }),
      }),

  basePath: process.env.BASE_PATH || "",

  ...(!isStaticWebBuild && {
    images: {
      remotePatterns: [
        { protocol: "https", hostname: "skygenesisenterprise.com", pathname: "/**" },
        { protocol: "https", hostname: "api.skygenesisenterprise.com", pathname: "/**" },
        { protocol: "https", hostname: "avatars.githubusercontent.com", pathname: "/**" },
        { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
        { protocol: "http", hostname: "127.0.0.1", pathname: "/**" },
        { protocol: "http", hostname: "localhost", pathname: "/**" },
      ],
    },
  }),

  ...(!isStaticWebBuild && {
    async headers() {
      const headers = [{ key: "Referrer-Policy", value: "origin-when-cross-origin" }];

      if (isProduction) {
        headers.push(
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" }
        );
      }

      return [{ source: "/(.*)", headers }];
    },

    async rewrites() {
      return [
        {
          source: "/api/:path*",
          destination: "http://localhost:8080/api/:path*",
        },
      ];
    },
  }),
};

let configWithPlugins: NextConfig = nextConfig;

export default withNextIntl(configWithPlugins);
