/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["skydigitmm.com", "amrtago.sgp1.digitaloceanspaces.com"],
  },
};

module.exports = nextConfig;
