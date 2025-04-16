/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/writing_site",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
