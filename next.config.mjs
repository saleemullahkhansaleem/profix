/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  assetPrefix: "/",
  basePath: "",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/api-external/:path*",
        destination: "https://cgrems.com/crm/web/:path*",
      },
    ];
  },
};

export default nextConfig;
