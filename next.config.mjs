const repo = "writing_site";
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "", // Leave empty if using the root
  assetPrefix: "/writing_site",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

// export default {
//   output: "export",
//   basePath: `/${repo}`,
//   assetPrefix: `/${repo}/`,
//   images: {
//     unoptimized: true,
//   },
// };
