const RuleTester = require('eslint').RuleTester
const rule = require('../../../lib/rules/aura-api')
const ruleTester = new RuleTester()

ruleTester.run('aura-api', rule, {
  valid: [ '$A.util.addClass(term)' ],
  invalid: [
    {
      code: '$A.util.fake(term)',
      errors: [{ messageId: 'invalidApi' }]
    }
  ]
})