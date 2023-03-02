/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["https://fakestoreapi.com/", "links.papareact.com"],
  },
};

module.exports = nextConfig;
