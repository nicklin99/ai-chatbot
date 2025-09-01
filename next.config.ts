import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'avatar.vercel.sh',
      },
    ],
  },
};
const withI18n = createNextIntlPlugin()
export default withI18n(nextConfig);
