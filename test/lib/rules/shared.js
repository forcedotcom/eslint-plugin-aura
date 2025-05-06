'use strict';
const { RuleTester } = require('eslint');
module.exports = {
  getNewTester: function () {
    return new RuleTester({
      languageOptions: {
        ecmaVersion: 5,
        // https://eslint.org/docs/latest/use/migrate-to-9.0.0#-flatruletester-is-now-ruletester
        // New default sourceType is 'module', override to 'script' for backward compatibility
        sourceType: 'script',
      },
    });
  },
};
