/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  serverExternalPackages: ['@prisma/client', '@prisma/adapter-pg', 'pg'],
  compiler: {
    styledComponents: true,
  },
  transpilePackages: [
    'next-sanity',
    'sanity',
    '@sanity/ui',
    '@sanity/vision',
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

    // Fix for react-pdf canvas issue
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
