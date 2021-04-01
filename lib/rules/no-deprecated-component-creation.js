'use strict';

const { isIdentifier, isMemberExpression, docUrl } = require('../util');

module.exports = {
  meta: {
    docs: {
      description: 'prevent usage of deprecated component creation methods',
      url: docUrl('no-deprecated-component-creation'),
    },

    schema: [],
  },

  create(context) {
    return {
      CallExpression(node) {
        const { callee } = node;

        if (!isMemberExpression(callee)) {
          return;
        }

        const { object, property } = callee;

        // Handle cases for `$A.something();`
        if (
          isIdentifier(property) &&
          isIdentifier(object) &&
          object.name === '$A'
        ) {
          const methodName = property.name;

          if (methodName === 'newCmp') {
            context.report({
              node,
              message: 'No use of deprecated $A.newCmp()',
            });
          } else if (methodName === 'newCmpAsync') {
            context.report({
              node,
              message: 'No use of deprecated $A.newCmpAsync()',
            });
          } else if (methodName === 'newCmpDeprecated') {
            context.report({
              node,
              message: 'No use of deprecated $A.newCmpDeprecated()',
            });
          } else if (methodName === 'newComponentDeprecated') {
            //  This may not actually exist but it's probably harmless to leave it here...
            context.report({
              node,
              message: 'No use of deprecated $A.newComponentDeprecated()',
            });
          }
        }

        // Handle cases for `$A.componentService.something();`
        if (
          isIdentifier(property) &&
          isMemberExpression(object) &&
          isIdentifier(object.object) &&
          isIdentifier(object.property) &&
          object.object.name === '$A' &&
          object.property.name === 'componentService'
        ) {
          const methodName = property.name;

          if (methodName === 'newComponent') {
            context.report({
              node,
              message:
                'No use of deprecated $A.componentService.newComponent()',
            });
          } else if (methodName === 'newComponentDeprecated') {
            context.report({
              node,
              message:
                'No use of deprecated $A.componentService.newComponentDeprecated()',
            });
          }
        }
      },
    };
  },
};
