describe('Aura rules - ', () => {
  const { RuleTester } = require('eslint');
  const path = require('path');
  const fs = require('fs');

  const baseTestFiles = path.resolve(path.join(__dirname, './fake-files/'));
  const rule = require('../lib/rules/aura-api');

  RuleTester.describe = function describe(text, method) {
    RuleTester.it.title = text;
    return method.call(this);
  };

  RuleTester.it = function it(text, method) {
    test(`${RuleTester.it.title}: ${text}`, method);
  };


  const ruleTester = new RuleTester();
  ruleTester.run(
    '@salesforce/aura/aura-api',
    rule,
    {
      valid: [
        {
          code: fs.readFileSync(`${baseTestFiles}/aura-method-recognized.js`).toString()
        }
      ],
      invalid: [
        {
          code: fs.readFileSync(`${baseTestFiles}/aura-method-not-recognized.js`).toString(),
          errors: [
            {
              message: 'Invalid Aura API'
            }
          ]
        }
      ]
    }
  );
});
