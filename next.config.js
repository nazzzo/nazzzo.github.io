/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: "https://nazzzo.github.io/",
  images: {
    domains: ['127.0.0.1', 'localhost', 'nazzzo.github.io'],
  },
};

module.exports = nextConfig;
