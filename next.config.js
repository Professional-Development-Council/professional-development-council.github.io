/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'media.istockphoto.com', 'drive.google.com'], // Only domain names, without https://
  },
  env: {
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  },

  //---- added below add to just redirect to new website https://professional-development-council.vercel.app/
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://professional-development-council.vercel.app/',
        permanent: true,
      },
    ];
  },

  //---
}

module.exports = nextConfig
