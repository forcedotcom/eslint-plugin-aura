'use strict';

const { RuleTester } = require('eslint');

const rule = require('../../../lib/rules/no-deprecated-event-creation');

const ruleTester = new RuleTester();
ruleTester.run('no-deprecated-event-creation', rule, {
  valid: [
    "var xx = $A.get('e.something');",
    "var xx = $A.get('e:something');",
    "component.set('v.entityHeader', $A.get(entityLabel));",
  ],
  invalid: [
    {
      code: "$A.get('e.ns:event').fire();",
      errors: [
        {
          message: 'Do not use $A.get() for an event.',
        },
      ],
    },
  ],
});
