const { RuleTester } = require('eslint');
const proxyquire = require('proxyquire');

const rule = proxyquire('../../../lib/rules/aura-service', {
  fs: {
    readdirSync() {
      return ['myLib.lib'];
    },
  },
});

const ruleTester = new RuleTester();
ruleTester.run('aura-service', rule, {
  valid: [
    {
      code: 'function validService() {}',
      filename: 'validService.js',
    },
    {
      code: '({ init: function init() { return Math.random(); } })',
      filename: 'myComponentController.js',
    },
  ],
  invalid: [
    {
      code: 'function arbitraryServiceName() {}',
      filename: 'someOtherServiceName.js',
      errors: [{ messageId: 'invalidName' }],
    },
  ],
});
