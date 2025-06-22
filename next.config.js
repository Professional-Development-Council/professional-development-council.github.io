/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com",
      "media.istockphoto.com",
      "drive.google.com",
      "lh3.googleusercontent.com", // Google profile pictures
      "lh4.googleusercontent.com", // Google profile pictures
      "lh5.googleusercontent.com", // Google profile pictures
      "lh6.googleusercontent.com", // Google profile pictures
    ],
  },
  env: {
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  },
};

module.exports = nextConfig;
