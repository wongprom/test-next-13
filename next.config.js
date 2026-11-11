/** @type {import('next').NextConfig} */
const path = require('path');

const nextCompiledReactDomServerBrowser = path.join(
  __dirname,
  'node_modules/next/dist/compiled/react-dom/server.browser.js'
);

const nextConfig = {
  // Keep Sanity off the server webpack graph.
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
  // Sanity packages are in serverExternalPackages — do not also transpile them.
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

    // Alias react-dom/server to Next's vendored browser build so it matches
    // Next's canary `react` (avoids React version-mismatch #527 on /admin).
    // Using the app's react-dom@19.2.7 server.browser caused:
    //   react: 19.2.0-canary-…  vs  react-dom: 19.2.7
    config.resolve.alias = {
      ...config.resolve.alias,
      canvas: false,
      'react-dom/server': nextCompiledReactDomServerBrowser,
      'react-dom/server.browser': nextCompiledReactDomServerBrowser,
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
