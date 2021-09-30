const reactJestConfig = require('@teambit/react/jest/jest.');

module.exports = {
  ...reactJestConfig,
  transformIgnorePatterns: ['/node_modules\/(?!@teambit)(.*)', '^.+\\.module\\.(css|sass|scss)$']
};
