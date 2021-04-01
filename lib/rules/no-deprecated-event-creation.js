'use strict';

const {
  isIdentifier,
  isLiteral,
  isMemberExpression,
  docUrl,
} = require('../util');

module.exports = {
  meta: {
    docs: {
      description: 'prevent usage of deprecated event creation methods',
      url: docUrl('no-deprecated-event-creation'),
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
