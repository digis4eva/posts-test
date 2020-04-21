module.exports = {
  extends: [
    'standard',
    'prettier',
    'prettier/standard',
    'plugin:jsx-a11y/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  env: {
    node: true,
    es6: true,
    browser: true,
    jest: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['babel', 'jsx-a11y', 'react', 'prettier', 'standard'],
  rules: {
    'no-console': 1,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-for': 0,
    'react/jsx-filename-extension': 0,
    'react/prop-types': 1,
    'eol-last': 1,
    'comma-dangle': 0,
    'jsx-a11y/no-autofocus': [
      2,
      {
        ignoreNonDOM: true,
      },
    ],
    'react/jsx-uses-vars': ['error'],
    'react/jsx-uses-react': 1,
    'no-unused-vars': ['warn', { vars: 'local', args: 'none', ignoreRestSiblings: true }],
    'space-before-function-paren': 0,
    'prettier/prettier': 2
  },
  settings: {
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to 'createReactClass'
      pragma: 'React', // Pragma to use, default to 'React'
      version: '16.0', // React version, default to the latest React stable release
    },
  },
}
