module.exports = {
  root: true,
  extends: [
<<<<<<< HEAD
    '@antfu',
=======
>>>>>>> 7259bfdf (init: initial commit)
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:svelte/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
<<<<<<< HEAD
  plugins: ['prettier', '@typescript-eslint'],
=======
  plugins: ['@typescript-eslint'],
>>>>>>> 7259bfdf (init: initial commit)
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    extraFileExtensions: ['.svelte'],
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
<<<<<<< HEAD
  rules: {
    'prettier/prettier': 'error',
  },
=======
>>>>>>> 7259bfdf (init: initial commit)
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
<<<<<<< HEAD
      rules: {
        'import/no-mutable-exports': 'off',
      },
=======
>>>>>>> 7259bfdf (init: initial commit)
    },
  ],
};
