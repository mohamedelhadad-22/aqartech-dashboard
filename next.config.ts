import type { NextConfig } from "next";
import tailwindcss from "@tailwindcss/vite";
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // plugins: [createNextIntlPlugin("./i18n/request.ts"), tailwindcss()],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
