/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost'
      },
      {
        protocol: 'https',
        hostname: 'cms.chemotion.net'
      },
      {
        protocol: 'https',
        hostname: 'cms.web123.chemotion.scc.kit.edu'
      }
    ]
  }
};

export default nextConfig;
