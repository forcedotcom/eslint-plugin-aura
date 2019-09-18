const path = require('path');

module.exports = function auraServiceRule(context) {
  let couldBeAnAuraService = false;

  return {
    Program() {
      const globalScope = context.getScope();
      const onlyOneBlock = globalScope.block.body.length === 1;
      const firstScope = globalScope.childScopes[0];

      if (onlyOneBlock && firstScope && firstScope.type === 'function' && firstScope.block.id && firstScope.block.id.name) {
        couldBeAnAuraService = true;
      }
    },

    FunctionDeclaration(node) {
      if (!couldBeAnAuraService) {
        return;
      }

      if (node.type === 'FunctionDeclaration') {
        const filename = context.getFilename();
        const expectedServiceName = path.basename(filename, '.js');
        const actualServiceName = node.id.name;

        if (expectedServiceName && actualServiceName) {
          context.markVariableAsUsed(expectedServiceName); // To avoid the no-unused-vars error

          if (expectedServiceName !== actualServiceName) {
            context.report({
              node,
              message: `The Aura service should be named "${expectedServiceName}"`
            });
          }
        }
      }
    }
  };
};

module.exports.schema = [];

module.exports.rules = {
  '@salesforce/aura/aura-service': 'error'
};