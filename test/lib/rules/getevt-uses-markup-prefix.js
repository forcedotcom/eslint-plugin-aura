'use strict';

const rule = require('../../../lib/rules/getevt-markup-prefix');
const { getNewTester } = require('./shared');

const ruleTester = getNewTester();
ruleTester.run('getevt-markup-prefix', rule, {
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
