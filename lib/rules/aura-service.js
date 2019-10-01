const path = require('path')
const fs = require('fs')

const hasLibFile = (() => {
  const cache = new Map()
  return function hasLibFile(fromFilePath) {
    const folderPath = path.dirname(fromFilePath)
    if(cache.has(folderPath)) return cache.get(folderPath)
    let result = false
    try {
      result = fs.readdirSync(folderPath).find(f => f.endsWith('.lib')).length > 0
    } finally {
      cache.set(folderPath, result)
    }
    return result
  }
})()

const create = function create(context) {
  let couldBeAnAuraService = false
  let done = false

  return {
    Program() {
      const globalScope = context.getScope()
      const onlyOneBlock = globalScope.block.body.length === 1
      const firstScope = globalScope.childScopes[0]

      if (onlyOneBlock && firstScope && firstScope.type === 'function' && firstScope.block.id && firstScope.block.id.name) {
        couldBeAnAuraService = hasLibFile(
          context.getFilename()
        )
      }
    },

    FunctionDeclaration(node) {
      if (!couldBeAnAuraService || done) {
        return
      }

      if (node.type === 'FunctionDeclaration') {
        const filename = context.getFilename()
        const expectedServiceName = path.basename(filename, '.js')
        const actualServiceName = node.id.name

        if (expectedServiceName && actualServiceName) {
          context.markVariableAsUsed(expectedServiceName) // To avoid the no-unused-vars error

          if (expectedServiceName !== actualServiceName) {
            context.report({
              node,
              messageId: 'invalidName',
              data: { expectedServiceName, actualServiceName }
            })
          }
        }

        done = true
      }
    }
  }
}


module.exports = {
  meta: {
    messages: {
      invalidName: "The Aura service must be named '{{expectedServiceName}}', got '{{actualServiceName}}'",
    }
  },
  schema: [],
  rules: {
    '@salesforce/aura/aura-service': 'error'
  },
  create
}
