/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["m.media-amazon.com", "fakestoreapi.com"],
  },
};

module.exports = nextConfig;
