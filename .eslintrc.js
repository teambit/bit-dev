module.exports = {
  extends: ['./node_modules/@teambit/react.eslint-config-bit-react'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'no-console': ['error'],
  },
};
