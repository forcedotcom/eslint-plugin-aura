'use strict';

const { isIdentifier, isLiteral, isMemberExpression } = require('../util');

module.exports = {
  meta: {
    docs: {
      description: 'Do not use $A.get() for an event.',
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
          callee.property.name === 'get'
        ) {
          const [arg] = node.arguments;

          if (
            isLiteral(arg) &&
            typeof arg.value === 'string' &&
            arg.value.startsWith('e.') &&
            arg.value.includes(':')
          ) {
            context.report({
              node,
              message: 'Do not use $A.get() for an event.',
            });
          }
        }
      },
    };
  },
};
