/**
 * @author Marat Vyshegorodtsev
 * @license BSD-3-Clause
 * For full license text, see LICENSE file in the repo root
 * or https://opensource.org/licenses/ISC
 */

const auraComponentConfig = require('salesforce-lightning-cli/lib/aura-component-config')
const codeStyleRulesConfig = require('salesforce-lightning-cli/lib/code-style-rules')
const [ auraApiRule, secureWindowRule, secureDocumentRule, ecmaIntrinsicsRule ] = [
  require('salesforce-lightning-cli/rules/aura-api'),
  require('salesforce-lightning-cli/rules/secure-window'),
  require('salesforce-lightning-cli/rules/secure-document'),
  require('salesforce-lightning-cli/rules/ecma-intrinsics'),
].map(r => ({ create: r}))

const rules = {
  'aura-api': auraApiRule,
  'secure-window': secureWindowRule,
  'secure-document': secureDocumentRule,
  'ecma-intrinsics': ecmaIntrinsicsRule
}

module.exports = {
  configs: {
    recommended: {
      env: auraComponentConfig.env,
      parserOptions: auraComponentConfig.parserOptions,
      globals: auraComponentConfig.globals,
      rules: { ...auraComponentConfig.rules, ...codeStyleRulesConfig },


    }
  },
  rules
}
