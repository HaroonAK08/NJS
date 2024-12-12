import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enable strict mode for React
  images: {
    domains: ['encrypted-tbn0.gstatic.com'], // Allow external image domains
  },
};

export default nextConfig;
