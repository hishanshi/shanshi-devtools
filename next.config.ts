import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Pages 在构建时提供仓库子路径；本地开发和普通静态导出使用根路径。
  basePath: process.env.PAGES_BASE_PATH ?? "",
  // 输出目录形式的页面，支持静态主机直接访问与刷新子页面。
  trailingSlash: true,
};

export default nextConfig;
