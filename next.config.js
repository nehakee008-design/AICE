/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },

  // Security headers
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },

  // Redirects
  redirects: async () => {
    return []
  },

  // Rewrites
  rewrites: async () => {
    return {
      beforeFiles: [],
    }
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://aicecomputers.com',
  },
}

export default nextConfig
