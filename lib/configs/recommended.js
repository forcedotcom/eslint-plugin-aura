'use strict';

module.exports = {
  extends: ['eslint:recommended', 'plugin:compat/recommended'],

  plugins: ['compat', '@salesforce/eslint-plugin-aura'],

  env: {
    browser: true,
  },

  parserOptions: {
    ecmaVersion: 5,
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
    Promise: true,
  },

  rules: {
    // Possible errors
    // https://eslint.org/docs/rules/#possible-errors
    'no-console': 'error',

    // Best practices
    // https://eslint.org/docs/rules/#best-practices
    'array-callback-return': 'error',
    'consistent-return': 'error',
    'default-case': 'error',
    'dot-notation': ['error', { allowKeywords: true }],
    eqeqeq: ['error', 'smart'],
    'guard-for-in': 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-else-return': 'error',
    'no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions', 'functions', 'methods'],
      },
    ],
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-floating-decimal': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-loop-func': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-unused-expressions': 'error',
    'no-void': 'error',
    'no-with': 'error',
    radix: 'error',
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'any'],

    // Variables
    // https://eslint.org/docs/rules/#variables
    'no-label-var': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef-init': 'error',
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used' }],
    'no-use-before-define': ['error', { functions: false }],

    // Aura specific rules
    '@salesforce/aura/aura-api': 'error',
    '@salesforce/aura/getevt-markup-prefix': 'error',
    '@salesforce/aura/no-deprecated-aura-error': 'error',
    '@salesforce/aura/no-deprecated-component-creation': 'error',
  },

  // Configuration for compat eslint plugin:
  // https://github.com/amilajack/eslint-plugin-compat#adding-polyfills
  settings: {
    // https://help.salesforce.com/articleView?id=getstart_browsers_sfx.htm&type=5
    targets:
      'last 1 version, last 1 firefox version, last 1 edge version, ie 11, not safari < 12',
    polyfills: ['Promise'],
  },
};
