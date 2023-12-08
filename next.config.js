/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions:true,
    },
    images: {
        domains: ['loremflickr.com'],
      },
}

module.exports = nextConfig
