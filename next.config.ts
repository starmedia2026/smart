import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // إعداد النطاقات المسموح بها لحل تحذيرات Cross-origin في بيئة Firebase Studio
  experimental: {
    allowedDevOrigins: [
      '6000-firebase-studio-1774113165011.cluster-utvmpwb6ojhlcsay7va6s7qkck.cloudworkstations.dev',
      '9000-firebase-studio-1774113165011.cluster-utvmpwb6ojhlcsay7va6s7qkck.cloudworkstations.dev',
    ],
  },
};

export default nextConfig;
