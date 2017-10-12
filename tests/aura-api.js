const rule = require("salesforce-lightning-cli/rules/aura-api"),
  RuleTester = require("eslint").RuleTester

const ruleTester = new RuleTester()

ruleTester.run("aura-api", rule, {
  valid: [
    {
      code: "$A.get()",
    }
  ],

  invalid: [
    {
      code: "$A.foo()",
      errors: [{ message: /^Invalid Aura API$/ }]
    }
  ]
})
