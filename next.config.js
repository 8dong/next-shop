/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ['cdn.class101.net']
  }
};

module.exports = nextConfig;
