/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    experimental: {
      appDir: true,
      erverComponentsExternalPackages: ["mongoose"],
    },
  };
  
  module.exports = nextConfig;