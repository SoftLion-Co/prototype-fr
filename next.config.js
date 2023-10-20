/** @type {import('next').NextConfig} */

module.exports = {
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

  sitemap: {
    hostname: "https://softlion.co",
    generate: true,
  },
};