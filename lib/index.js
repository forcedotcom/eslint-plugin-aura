'use strict';

module.exports = {
  rules: {
    'aura-api': require('./rules/aura-api'),
    'ecma-intrinsics': require('./rules/ecma-intrinsics'),
    'secure-document': require('./rules/secure-document'),
    'secure-window': require('./rules/secure-window'),
    'getevt-use-markup-prefix': require('./rules/getevt-uses-markup-prefix'),
    'no-deprecated-aura-error': require('./rules/no-deprecated-aura-error'),
    'no-deprecated-component-creation': require('./rules/no-deprecated-component-creation'),
    'no-deprecated-event-creation': require('./rules/no-deprecated-event-creation'),
  },
  configs: {
    recommended: require('./configs/recommended'),
    locker: require('./configs/locker'),
  },
};
