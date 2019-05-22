const auraComponentConfig = require('salesforce-lightning-cli/lib/aura-component-config');
const codeStyleRulesConfig = require('salesforce-lightning-cli/lib/code-style-rules');

const auraApiRule = require('./rules/aura-api');

const rules = {
  'aura-api': { create: auraApiRule }
};

module.exports = {
  configs: {
    recommended: {
      env: {
        ...auraComponentConfig.env,
        es6: false
      },
      parserOptions: auraComponentConfig.parserOptions,
      globals: {
        ...auraComponentConfig.globals,
        Fixture: 'readonly',
        ScrumTeam: 'readonly',
        ImportJson: 'readonly',
        Test: 'readonly',
        Fact: 'readonly',
        Data: 'readonly',
        Async: 'readonly',
        Skip: 'readonly',
        Records: 'readonly',
        Stubs: 'readonly',
        Mocks: 'readonly',
        Assert: 'readonly'
      },
      rules: { ...auraComponentConfig.rules, ...codeStyleRulesConfig },
    }
  },
  rules
};
