/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  swcMinify: false,
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.m?js$/,
      resolve: { fullySpecified: false },
    });
    if (isServer) {
      const externals = Array.isArray(config.externals) ? config.externals : [];
      config.externals = [
        ...externals,
        { 'unpdf': 'commonjs unpdf', 'mammoth': 'commonjs mammoth' },
      ];
    }
    return config;
  },
};

module.exports = nextConfig;
