'use strict';

const {
  isMemberExpression,
  isIdentifier,
  isLiteral,
  docUrl,
} = require('../util');

module.exports = {
  meta: {
    docs: {
      description:
        "verify the presence of the 'markup://' prefix for events accessed via $A.getEvt()",
      url: docUrl('getevt-markup-prefix'),
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
