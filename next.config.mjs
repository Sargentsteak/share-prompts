// Import the necessary module
import pkg from "next/image.js";

// Access the remotePatterns property from the imported module
const { remotePatterns } = pkg;
// Define the nextConfig object
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

// Export the nextConfig object
export default nextConfig;
