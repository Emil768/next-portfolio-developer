/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});
const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    domains: ["images.ctfassets.net"],
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: "url-loader",
      },
    });
    return config;
  },
});

module.exports = nextConfig;
