module.exports = {
  webpack: (config, { isServer }) => {
    // Exclude test files from the Next.js build
    if (!isServer) {
      config.module.rules.push({
        test: /index\.test\.js$/,
        use: "null-loader",
      });
    }

    return config;
  },
};
