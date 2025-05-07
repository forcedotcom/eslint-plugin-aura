'use strict';

const globals = require('globals');
const js = require('@eslint/js');

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2018,
      globals: {
        ...globals.mocha,
        ...globals.node,
      },
      sourceType: 'commonjs',
    },

    rules: {
      strict: ['error'],
    },
  },
];
