import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/zeryatec',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
