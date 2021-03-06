/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY,
    RAPID_API_KEY: process.env.RAPID_API_KEY,
  },
}

module.exports = nextConfig
