/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [],
    unoptimized: true,
  },
  experimental: {
    serverActions: true,
  },
  output: 'standalone',
}

module.exports = nextConfig 