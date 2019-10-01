const auraApiRule = require('./rules/aura-api')
const auraServiceRule = require('./rules/aura-service')
const recommendedRulesConfig = require('./rules/recommended')
const es6RulesConfig = require('./rules/es6')

module.exports = {
  rules: {
    'aura-api':  auraApiRule,
    'aura-service': auraServiceRule
  },
  configs: {
    recommended: {
      extends: [
        'eslint:recommended',
        'plugin:compat/recommended'
      ],
      plugins: [
        'compat',
        '@salesforce/eslint-plugin-aura'
      ],
      env: {
        browser: true,
        es6: false
      },
      parserOptions: {
        ecmaVersion: 5
      },
      globals: {
        $A: true,
        AuraContext: true,
        AuraSerializationService: true,
        AuraExpressionService: true,
        AuraEventService: true,
        AuraLocalizationService: true,
        AuraStorageService: true,
        AuraStyleService: true,
        MetricsService: true,
        AuraDevToolService: true,
        Component: true,
        CKEDITOR: true,
        FORCE: true,
        moment: true,
        exports: true,
        iScroll: true,
        unescape: true,
        Promise: true,
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
      rules: {
        ...recommendedRulesConfig,
        ...es6RulesConfig,
        ...auraApiRule.rules,
        ...auraServiceRule.rules,
      },
      settings: {
        // https://help.salesforce.com/articleView?id=getstart_browsers_sfx.htm&type=5
        targets: 'last 1 version, last 1 firefox version, last 1 edge version, ie 11, not safari < 12'
      },
    }
  }
}
