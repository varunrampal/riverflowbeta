import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.alias["react-router-dom"] = path.resolve(
      process.cwd(),
      "src/compat/react-router-dom.jsx",
    );
    return config;
  },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
