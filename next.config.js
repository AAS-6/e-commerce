/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wbkvxaekooiraoyacqpq.supabase.co',
        port: '443',
        pathname: '/storage/v1/object/public/*'
      }
    ]
  }
}

module.exports = nextConfig
