/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: "custom",
    loaderFile: "./akamai-loader.js"
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
