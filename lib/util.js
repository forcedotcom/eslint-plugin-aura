'use strict';

const { version, repository } = require('../package.json');

/**
 * Get the source code AST for the rule context.
 * @param {RuleContext} context The context for the ESLint rule
 * @returns {SourceCode} Object representing the source code AST
 */
function getSourceCode(context) {
  return context.sourceCode ? context.sourceCode : context.getSourceCode();
}

/**
 * Get the scope for a given node.
 * @param {RuleContext} context The context for the ESLint rule
 * @param {ASTNode} node An AST node
 * @returns {Scope} The scope for a given node
 */
function getScope(context, node) {
  const sourceCode = getSourceCode(context);
  return sourceCode.getScope ? sourceCode.getScope(node) : context.getScope();
}

/**
 * Finds the escope reference in the given scope.
 * @param {Object} scope The scope to search.
 * @param {ASTNode} node The identifier node.
 * @returns {Reference|null} Returns the found reference or null if none were found.
 */
function findReference(scope, node) {
  const references = scope.references.filter(
    (reference) =>
      reference.identifier.range[0] === node.range[0] &&
      reference.identifier.range[1] === node.range[1]
  );

  if (references.length === 1) {
    return references[0];
  }
  return null;
}

/**
 * Checks if the given identifier node is shadowed in the given scope.
 * @param {Object} scope The current scope.
 * @param {Object} globalScope The global scope.
 * @param {string} node The identifier node to check
 * @returns {boolean} Whether or not the name is shadowed.
 */
function isShadowed(scope, globalScope, node) {
  const reference = findReference(scope, node);
  return reference && reference.resolved && reference.resolved.defs.length > 0;
}

/**
 * Finds all the nodes used by a composed member expression.
 * E.g.: Array.prototype.slice should produce
 * [{type: "Identifier", name: "Array"}, {type: "Identifier", name: "prototype"},
 * {type: "Identifier", name: "slice"}]
 * @param {ASTNode} node The MemberExpression node.
 * @returns {Array} Returns a list of nodes that represent the namespace.
 */
function buildMemberExpressionNamespace(currentScope, globalScope, node) {
  const ns = [];
  let nodeToUse = node;

  do {
    ns.unshift(nodeToUse.property);
    if (isMemberExpression(nodeToUse.object)) {
      nodeToUse = nodeToUse.object;
    } else if (
      !isGlobalThisReferenceOrGlobalWindow(
        currentScope,
        globalScope,
        nodeToUse.object
      )
    ) {
      ns.unshift(nodeToUse.object);
      nodeToUse = undefined;
    } else {
      nodeToUse = undefined;
    }
  } while (nodeToUse);
  return ns;
}

/**
 * Checks if the given identifier node is a ThisExpression in the global scope
 * or the global window property.
 * @param {Object} scope The current scope.
 * @param {Object} globalScope The global scope.
 * @param {string} node The identifier node to check
 * @returns {boolean} Whether or not the node is a reference to the global object.
 */
function isGlobalThisReferenceOrGlobalWindow(scope, globalScope, node) {
  if (scope.type === 'global' && node.type === 'ThisExpression') {
    return true;
  }
  if (node.name === 'window') {
    return !isShadowed(scope, globalScope, node);
  }

  return false;
}

/**
 * Returns the documentation url for a given rule.
 * @param {string} ruleName The rule name.
 * @returns The generated URL.
 */
function docUrl(ruleName) {
  // strip ending '.git'
  const base = repository.url.slice(0, -4);
  return `${base}/blob/v${version}/docs/rules/${ruleName}.md`;
}

/**
 * Checks if a node is an identifier node
 * @param {ASTNode} node The node to check.
 * @returns {boolean} Wether or the node is an identifier.
 */
function isIdentifier(node) {
  return Boolean(node && node.type === 'Identifier');
}

/**
 * Checks if a node is a literal node
 * @param {ASTNode} node The node to check.
 * @returns {boolean} Wether or the node is a literal.
 */
function isLiteral(node) {
  return Boolean(node && node.type === 'Literal');
}

/**
 * Checks if a node is a member expression node
 * @param {ASTNode} node The node to check.
 * @returns {boolean} Wether or the node is a member expression.
 */
function isMemberExpression(node) {
  return Boolean(node && node.type === 'MemberExpression');
}

module.exports = {
  getSourceCode,
  getScope,
  findReference,
  isShadowed,
  isGlobalThisReferenceOrGlobalWindow,
  buildMemberExpressionNamespace,
  isIdentifier,
  isLiteral,
  isMemberExpression,
  docUrl,
};
