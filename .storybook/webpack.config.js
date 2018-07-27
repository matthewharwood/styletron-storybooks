const path = require("path");

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType) => {
  console.log('wtf'.repeat(100), path.resolve('../src/components/dotcom-styles/src'));


  storybookBaseConfig.resolve = {
    extensions: ['.js', '.json'],
    alias: {
      '@matthewharwood': path.resolve(__dirname, "../src"),
    },
  };
  // Return the altered config
  return storybookBaseConfig;
};
