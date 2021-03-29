const auraApiRule = require('./rules/aura-api');
const recommendedConfig = require('./configs/recommended');

module.exports = {
  rules: {
    'aura-api': auraApiRule,
  },
  configs: {
    recommended: recommendedConfig,
  },
};
