/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  // Keep Sanity off the server webpack graph so it can't mix with Next's
  // vendored React canary (React error #527 → /admin 500).
  serverExternalPackages: [
    '@prisma/client',
    '@prisma/adapter-pg',
    'pg',
    'sanity',
    'next-sanity',
    '@sanity/vision',
    '@sanity/ui',
    'styled-components',
  ],
  compiler: {
    styledComponents: true,
  },
  // Sanity packages are in serverExternalPackages above — do not also transpile them.
  transpilePackages: [
    'react-refractor',
    'unist-util-visit-parents',
    'react-pdf',
    'pdfjs-dist',
  ],
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.node/,
      use: 'raw-loader',
    });

    // react-pdf (and Sanity client chunks) need the browser server build.
    config.resolve.alias = {
      ...config.resolve.alias,
      canvas: false,
      'react-dom/server': require.resolve('react-dom/server.browser'),
      'unist-util-visit-parents/do-not-use-color': path.join(
        __dirname,
        'node_modules/unist-util-visit-parents/lib/color.js'
      ),
    };

    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false,
        fs: false,
      };
    }

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

module.exports = nextConfig;
