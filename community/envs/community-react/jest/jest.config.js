const reactJestConfig = require('@teambit/react/dist/jest/jest.config');

module.exports = {
  ...reactJestConfig,
  transformIgnorePatterns: [
    'node_modules/(?!(.*@teambit|.*@learnbit|.*react-medium-image-zoom|.*react-syntax-highlighter)/)',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
};
