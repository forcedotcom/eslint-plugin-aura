'use strict';

const rule = require('../../../lib/rules/aura-api');
const { getNewTester } = require('./shared');

const ruleTester = getNewTester();
ruleTester.run('aura-api', rule, {
  valid: ['$A.util.addClass(term)'],
  invalid: [
    {
      code: '$A.util.fake(term)',
      errors: [{ messageId: 'invalidApi' }],
    },
  ],
});
