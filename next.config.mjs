import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // The migrated components use standard <img> elements. Keep static image
    // imports as URL strings instead of Next.js image metadata objects.
    disableStaticImages: true,
  },
  webpack(config) {
    config.resolve.alias["react-router-dom"] = path.resolve(
      process.cwd(),
      "src/compat/react-router-dom.jsx",
    );
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp|avif|ico|bmp|svg)$/i,
      type: "asset/resource",
    });
    return config;
  },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
