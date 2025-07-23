/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./src/utils/imageLoader.ts",
  },
};

module.exports = nextConfig;
