/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    nextConfig,
  
    // Налаштування підключення SCSS
    sassOptions: {
      includePaths: ["styles"],
    },

    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
        },
      ],
    },
};