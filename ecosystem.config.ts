module.exports = {
    name: "i18next-locales", // Name of your application
    script: "./dist/cjs/main.cjs", // Entry point of your application
    // interpreter: "bun", // Path to the Bun interpreter
    instances: 1, // Number of instances (cores to use)
    exec_mode: "cluster", // Enable cluster mode (bun error with cluster mode)
    port: 5000, // Set the desired port here
  };