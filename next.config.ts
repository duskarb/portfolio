import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // 개발 환경에서는 basePath를 사용하지 않음
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  images: {
    unoptimized: true,
  },
  typedRoutes: true
};

export default nextConfig;
