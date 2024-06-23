/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions:true,
    },
    images: {
        domains: ['swkzw6evztkyfvae.public.blob.vercel-storage.com','vercel.com','img.daisyui.com'],
      },
     
      
}

module.exports = nextConfig
