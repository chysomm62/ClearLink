/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
    ],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        { loader: "@svgr/webpack", options: { icon: true } },
        { loader: "url-loader" },
      ],
    });

    return config;
  },
};

export default nextConfig;
