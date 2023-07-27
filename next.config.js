/** @type {import('next').NextConfig} */
const nextConfig = {

  output: "standalone",
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**/*',
      },
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
        port: '',
        pathname: '/**/*',
      },
    ],
  },
}

module.exports = nextConfig
