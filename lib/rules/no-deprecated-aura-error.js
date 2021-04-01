'use strict';

const { isMemberExpression, isIdentifier, docUrl } = require('../util');

module.exports = {
  meta: {
    docs: {
      description: 'prevent usage of $A.error',
      url: docUrl('no-deprecated-aura-error'),
    },

    schema: [],
  },

  create(context) {
    return {
      CallExpression(node) {
        const { callee } = node;

        if (
          isMemberExpression(callee) &&
          isIdentifier(callee.object) &&
          callee.object.name === '$A' &&
          isIdentifier(callee.property) &&
          callee.property.name === 'error'
        ) {
          context.report({
            node,
            message: 'No use of $A.error. throw new Error() instead.',
          });
        }
      },
    };
  },
};
