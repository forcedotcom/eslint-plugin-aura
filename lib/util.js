/**
 * Finds the escope reference in the given scope.
 * @param {Object} scope The scope to search.
 * @param {ASTNode} node The identifier node.
 * @returns {Reference|null} Returns the found reference or null if none were found.
 */
function findReference(scope, node) {
  const references = scope.references
    .filter((reference) => reference.identifier.range[0] === node.range[0]
            && reference.identifier.range[1] === node.range[1])

  if (references.length === 1) {
    return references[0]
  }
  return null
}

/**
 * Checks if the given identifier node is shadowed in the given scope.
 * @param {Object} scope The current scope.
 * @param {Object} globalScope The global scope.
 * @param {string} node The identifier node to check
 * @returns {boolean} Whether or not the name is shadowed.
 */
function isShadowed(scope, globalScope, node) {
  const reference = findReference(scope, node)
  return reference && reference.resolved && reference.resolved.defs.length > 0
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
  const ns = []
  let nodeToUse = node

  do {
    ns.unshift(nodeToUse.property)
    if (nodeToUse.object.type === 'MemberExpression') {
      nodeToUse = nodeToUse.object
      // eslint-disable-next-line no-use-before-define
    } else if (!isGlobalThisReferenceOrGlobalWindow(currentScope, globalScope, nodeToUse.object)) {
      ns.unshift(nodeToUse.object)
      nodeToUse = undefined
    } else {
      nodeToUse = undefined
    }
  } while (nodeToUse)
  return ns
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
    return true
  } if (node.name === 'window') {
    return !isShadowed(scope, globalScope, node)
  }

  return false
}

module.exports = {
  findReference,
  isShadowed,
  isGlobalThisReferenceOrGlobalWindow,
  buildMemberExpressionNamespace
}
