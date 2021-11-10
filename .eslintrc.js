module.exports = {
  extends: ['./node_modules/@teambit/react.eslint-config-bit-react', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'no-console': ['error'],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'prettier/prettier': 'error',
    'consistent-return': 'off',
    'no-use-before-design': 'off',
    'arrow-body-style': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
  },
  plugins: ['prettier'],
};
