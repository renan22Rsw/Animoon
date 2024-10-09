/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },

  images: {
    remotePatterns: [{ protocol: "https", hostname: "*.anilist.co" }],
    unoptimized: true,
  },
};

export default nextConfig;
