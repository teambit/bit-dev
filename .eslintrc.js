module.exports = {
  extends: ['./node_modules/@teambit/react.eslint-config-bit-react', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'no-console': ['error'],
    'no-use-before-define': 'off', // provided by ts-eslin/no-use-before
    '@typescript-eslint/no-use-before-define': ['warn', { typedefs: false, functions: false }],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'react/destructuring-assignment': 'off',
    'class-methods-use-this': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
  },
  plugins: ['prettier'],
};
