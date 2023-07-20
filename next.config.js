/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: "/",
  images: {
    domains: ['127.0.0.1', 'localhost',],
  },
};

module.exports = nextConfig;
