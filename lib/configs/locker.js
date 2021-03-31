'use strict';

module.exports = {
  extends: [require.resolve('./recommended')],

  rules: {
    'no-array-constructor': 'error', // help with instanceof

    // Locker specific rules
    '@salesforce/aura/ecma-intrinsics': 'error',
    '@salesforce/aura/secure-document': 'error',
    '@salesforce/aura/secure-window': 'error',
  },
};
