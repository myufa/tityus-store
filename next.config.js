/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/get-started',
        permanent: true,
      },
      {
        source: '/shop',
        destination: '/shop/kidney',
        permanent: true,
      }
    ]
  },
}

module.exports = nextConfig
