/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: ['media.discordapp.net'],
  },
  eslint: {
    ignoreDuringBuilds: true,
    ignorePatterns: ["**/*.jsx"],
  },
};
