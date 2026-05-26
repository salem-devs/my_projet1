/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,      // ← active le répertoire expérimental `app/`
  },
};

module.exports = nextConfig;
