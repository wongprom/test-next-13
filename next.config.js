/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.node/,
      use: 'raw-loader',
    });

    // Fix for react-pdf canvas issue
    config.resolve.alias = {
      ...config.resolve.alias,
      canvas: false,
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
    ],
    domains: ['cdn.sanity.io'],
  },
};

module.exports = nextConfig;
