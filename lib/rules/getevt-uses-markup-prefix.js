'use strict';

const { isMemberExpression, isIdentifier, isLiteral } = require('../util');

module.exports = {
  meta: {
    docs: {
      description:
        "When using $A.getEvt(), the prefix to the String param should be 'markup://'",
      category: 'Dependencies',
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
          callee.property.name === 'getEvt'
        ) {
          const [arg] = node.arguments;

          if (
            isLiteral(arg) &&
            typeof arg.value === 'string' &&
            !arg.value.startsWith('markup://')
          ) {
            context.report({
              node,
              message:
                "When using $A.getEvt(), the prefix to the first param should be 'markup://'",
            });
          }
        }
      },
    };
  },
};
