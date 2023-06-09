/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wbkvxaekooiraoyacqpq.supabase.co",
        port: "443",
        pathname: "/storage/v1/object/public/*",
      },
    ],
    domains: ["wbkvxaekooiraoyacqpq.supabase.co"],
  },
  experimental: {
    mdxRs: true,
  },
};

const withMdx = require("@next/mdx")();

module.exports = withMdx(nextConfig);
// module.exports = nextConfig;
