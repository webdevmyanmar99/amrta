/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["amrtago.sgp1.digitaloceanspaces.com"],
  },
};

module.exports = nextConfig;
