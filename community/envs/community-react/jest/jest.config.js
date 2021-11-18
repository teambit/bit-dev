const reactJestConfig = require('@teambit/react/dist/jest/jest.config');

module.exports = {
  ...reactJestConfig,
  transformIgnorePatterns: ['node_modules/(?!(.*@teambit|.*@learn-bit)/)', '^.+\\.module\\.(css|sass|scss)$'],
};
