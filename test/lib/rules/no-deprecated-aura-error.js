'use strict';

const { getNewTester } = require('./shared');
const rule = require('../../../lib/rules/no-deprecated-aura-error');

const ruleTester = getNewTester();
ruleTester.run('no-deprecated-aura-error', rule, {
  valid: ["$A.errory('something');", "$B.error('something');"],
  invalid: [
    {
      code: "$A.error('Quack');",
      errors: [
        {
          message: 'No use of $A.error. throw new Error() instead.',
        },
      ],
    },
  ],
});
