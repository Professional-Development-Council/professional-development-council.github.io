/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'images.unsplash.com','media.istockphoto.com'], // Only domain names, without https://
  },
}

module.exports = nextConfig
