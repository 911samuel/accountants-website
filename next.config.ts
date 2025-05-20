import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.accountants.co.rw",
        port: "",
        pathname: "/**",
      },
    ],
    domains: ["api.accountants.co.rw"], 
  },
};

export default nextConfig;
