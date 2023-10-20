/** @type {import('next').NextConfig} */

module.exports = {
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