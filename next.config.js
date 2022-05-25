/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '/',
  },
  externals: {
    'sharp': 'commonjs sharp'
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf$/i,
      type: 'asset/source'
    });

    return config;
  },
};
