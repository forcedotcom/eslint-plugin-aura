'use strict';

const { isMemberExpression, isIdentifier } = require('../util');

module.exports = {
  meta: {
    docs: {
      description: 'No use of $A.error. throw new Error() instead.',
      category: 'Deprecated',
      recommended: true,
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
