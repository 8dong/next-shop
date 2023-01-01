/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ['cdn.class101.net']
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://shopitemapi-env.eba-zmpmdkiy.ap-northeast-2.elasticbeanstalk.com/'
      }
    ];
  }
};

module.exports = nextConfig;
