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
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com'
      }
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },

  async redirects() {
    return [
      {
        source: '/docs/:path*',
        destination: 'https://docs.chemotion.net/:path*',
        permanent: true
      }
    ];
  },

  compress: true,
  reactStrictMode: true
};

export default nextConfig;
