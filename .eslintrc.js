module.exports = {
  extends: ['./node_modules/@teambit/react.eslint-config-bit-react', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'no-console': ['error'],
    'react/jsx-props-no-spreading': 'off',
    'prettier/prettier': 'error',
    'consistent-return': 'off',
    'arrow-body-style': 'off',
  },
  plugins: ['prettier'],
};
