import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // Prefer this app's node_modules so "tailwindcss" resolves to v4 here,
    // not the parent's v3 (which causes "Can't resolve 'tailwindcss'").
    const projectNodeModules = path.resolve(process.cwd(), "node_modules");
    config.resolve = config.resolve ?? {};
    config.resolve.modules = [
      projectNodeModules,
      ...(Array.isArray(config.resolve.modules) ? config.resolve.modules : ["node_modules"]),
    ];
    return config;
  },
};

export default nextConfig;
