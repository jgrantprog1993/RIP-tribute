/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/death-notice-details/:seo*',
        destination: '/death-notice-details/[id]',
      },
    ];
  },
};

export default nextConfig;
