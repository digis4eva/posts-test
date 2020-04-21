module.exports = {
  extends: [
    'standard',
    'prettier',
    'prettier/standard',
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
  plugins: ['babel', 'react', 'prettier', 'standard'],
  rules: {
    'no-console': 1,
    'react/jsx-filename-extension': 0,
    'react/prop-types': 1,
    'eol-last': 1,
    'comma-dangle': 0,
    'react/jsx-uses-vars': ['error'],
    'react/jsx-uses-react': 1,
    'no-unused-vars': ['warn', { vars: 'local', args: 'none', ignoreRestSiblings: true }],
    'space-before-function-paren': 0,
    'prettier/prettier': 2,
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
