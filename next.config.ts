import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  transpilePackages: ["three", "@react-three/fiber", "@react-three/fi"],
};

export default nextConfig;