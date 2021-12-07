const reactJestConfig = require('@teambit/react/jest/jest.config');
const { generateNodeModulesPattern } = require('@teambit/dependencies.modules.packages-excluder');

const packagesToExclude = ['@teambit', '@learnbit', 'react-medium-image-zoom', 'react-syntax-highlighter'];

module.exports = {
  ...reactJestConfig,
  transformIgnorePatterns: [
    '^.+\\.module\\.(css|sass|scss)$',
    generateNodeModulesPattern({ packages: packagesToExclude }),
  ],
};
