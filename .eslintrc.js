module.exports = {
  extends: [require.resolve('@teambit/react.eslint-config-bit-react')],
  parserOptions: {
    project: require.resolve('./tsconfig.json'),
  },
  rules: {
    'no-console': ['error'],
  },
};
