const auraComponentConfig = require('salesforce-lightning-cli/lib/aura-component-config');
const codeStyleRulesConfig = require('salesforce-lightning-cli/lib/code-style-rules');

const auraApiRule = require('./rules/aura-api');

const rules = {
  'aura-api': { create: auraApiRule }
};

module.exports = {
  configs: {
    recommended: {
      env: auraComponentConfig.env,
      parserOptions: auraComponentConfig.parserOptions,
      globals: auraComponentConfig.globals,
      rules: { ...auraComponentConfig.rules, ...codeStyleRulesConfig },
    }
  },
  rules
};
