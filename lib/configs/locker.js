const lockerConfig = require('../locker/aura-component-config');

module.exports = {
  extends: [require.resolve('./recommended')],

  globals: {
    ...lockerConfig.globals,
  },

  rules: {
    ...lockerConfig.rules,
    '@salesforce/aura/ecma-intrinsics': 'error',
    '@salesforce/aura/secure-document': 'error',
    '@salesforce/aura/secure-window': 'error',
  },
};
