import path from "path";
import { fileURLToPath } from "url";

// These two lines allow you to simulate the `__dirname` variable in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["@ellipsis/shared"] = path.resolve(
      __dirname,
      "../../shared/src"
    );
    return config;
  },
};

export default nextConfig;
