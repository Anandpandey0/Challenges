/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ecf.bstatic.com", "cf.bstatic.com"],
    // images: {
    //   domains: ["raw.githubusercontent.com"],
    // },

    remotePatterns: [
      {
        protocol: "https",
        hostname: "a0.muscache.com",
        port: "",
        pathname: "/pictures/**",
      },
      {
        protocol: "https",
        hostname: "a0.muscache.com",
        port: "",
        pathname: "/im/pictures/**",
      },
      {
        protocol: "https",
        hostname: "cf.bstatic.com",
        port: "",
        pathname: "xdata/images/hotel/**",
      },
    ],
  },
};

module.exports = nextConfig;
