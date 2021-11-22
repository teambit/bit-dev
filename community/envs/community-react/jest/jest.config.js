const reactJestConfig = require('@teambit/react/dist/jest/jest.config');

module.exports = {
  ...reactJestConfig,
  transformIgnorePatterns: ['node_modules/(?!(.*@teambit|.*@learnbit)/)', '^.+\\.module\\.(css|sass|scss)$'],
};
