'use strict';

const { RuleTester } = require('eslint');

const rule = require('../../../lib/rules/getevt-uses-markup-prefix');

const ruleTester = new RuleTester();
ruleTester.run('getevt-uses-markup-prefix', rule, {
  valid: ["$A.getEvt('markup://flexipageEditor:activateCompleted').fire()"],
  invalid: [
    {
      code: "$A.getEvt('flexipageEditor:activateCompleted').fire()",
      errors: [
        {
          message:
            "When using $A.getEvt(), the prefix to the first param should be 'markup://'",
        },
      ],
    },
  ],
});
