'use strict';

const { version } = require('../package.json');
const recommendedConfig = require('./configs/recommended');
const lockerConfig = require('./configs/locker');

function createFlatConfig(plugin, config) {
  return [
    {
      plugins: {
        '@salesforce/aura': plugin,
      },
    },
    ...config,
  ];
}

const plugin = {
  meta: {
    name: '@salesforce/eslint-plugin-aura',
    version,
  },
  rules: {
    'aura-api': require('./rules/aura-api'),
    'ecma-intrinsics': require('./rules/ecma-intrinsics'),
    'getevt-markup-prefix': require('./rules/getevt-markup-prefix'),
    'no-deprecated-aura-error': require('./rules/no-deprecated-aura-error'),
    'no-deprecated-component-creation': require('./rules/no-deprecated-component-creation'),
    'no-deprecated-event-creation': require('./rules/no-deprecated-event-creation'),
    'secure-document': require('./rules/secure-document'),
    'secure-window': require('./rules/secure-window'),
  },
};

plugin.configs = {
  recommended: createFlatConfig(plugin, recommendedConfig),
  locker: createFlatConfig(plugin, lockerConfig),
};

module.exports = plugin;
