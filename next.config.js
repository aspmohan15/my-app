const nextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },

}

module.exports = nextConfig