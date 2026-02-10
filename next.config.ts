import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', 
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/:path*',
  //       has: [
  //         {
  //           type: 'host',
  //           value: 'www.parnikaindia.com',
  //         },
  //       ],
  //       destination: 'https://parnikaindia.com/:path*',
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default nextConfig;