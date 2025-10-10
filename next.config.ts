import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['bbt.1cdn.vn'], // 👈 thêm domain chứa ảnh ngoài
  },
};

export default nextConfig;
