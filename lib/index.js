const auraApiRule = require('./rules/aura-api')
const auraServiceRule = require('./rules/aura-service')
const recommendedRules = require('./rules/recommended')
const es6Rules = require('./rules/es6')

const rules = {
  'aura-api': {
    create: auraApiRule
  },
  'aura-service': {
    create: auraServiceRule
  }
}

module.exports = {
  rules,
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
        'compat/compat': 'error',
        ...recommendedRules,
        ...es6Rules,
        ...auraApiRule.rules,
        ...auraServiceRule.rules,
      },
      settings: {
        targets: 'last 1 version, last 1 firefox version, last 1 edge version, ie 11, not safari < 12'
      },
    }
  }
}
