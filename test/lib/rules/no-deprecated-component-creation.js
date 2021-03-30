'use strict';

const { RuleTester } = require('eslint');

const rule = require('../../../lib/rules/no-deprecated-component-creation');

const ruleTester = new RuleTester();
ruleTester.run('no-deprecated-component-creation', rule, {
  valid: [
    'var cmp = $A.getComponent(globalId);',
    "var cmp = $A.createComponent('ui:button', params, callback);",
    'var nae = $A.componentService.newAnythingElse();',
  ],
  invalid: [
    {
      code: "$A.newCmp('ui:button')",
      errors: [
        {
          message: 'No use of deprecated $A.newCmp()',
        },
      ],
    },
    {
      code: "$A.newCmpAsync('ui:button', para, cbak)",
      errors: [
        {
          message: 'No use of deprecated $A.newCmpAsync()',
        },
      ],
    },
    {
      code: "$A.newCmpDeprecated('ui:button')",
      errors: [
        {
          message: 'No use of deprecated $A.newCmpDeprecated()',
        },
      ],
    },
    {
      code: "$A.componentService.newComponent('ui:button')",
      errors: [
        {
          message: 'No use of deprecated $A.componentService.newComponent()',
        },
      ],
    },
    {
      code: "$A.componentService.newComponentDeprecated('ui:button')",
      errors: [
        {
          message:
            'No use of deprecated $A.componentService.newComponentDeprecated()',
        },
      ],
    },
  ],
});
