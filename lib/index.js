const auraApiRule = require('./rules/aura-api');
const ecmaIntrinsicsRule = require('./rules/ecma-intrinsics');
const secureDocumentRule = require('./rules/secure-document');
const secureWindowRule = require('./rules/secure-window');
const recommendedConfig = require('./configs/recommended');
const lockerConfig = require('./configs/locker');

module.exports = {
  rules: {
    'aura-api': auraApiRule,
    'ecma-intrinsics': ecmaIntrinsicsRule,
    'secure-document': secureDocumentRule,
    'secure-window': secureWindowRule,
  },
  configs: {
    recommended: recommendedConfig,
    locker: lockerConfig,
  },
};
