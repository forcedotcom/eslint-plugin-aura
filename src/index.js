/**
 * @author Marat Vyshegorodtsev
 * @license BSD-3-Clause
 * For full license text, see LICENSE file in the repo root
 * or https://opensource.org/licenses/BSD-3-Clause
 */

import auraComponentConfig  from 'salesforce-lightning-cli/lib/aura-component-config'
import codeStyleRulesConfig from 'salesforce-lightning-cli/lib/code-style-rules'
import auraApiRule from 'salesforce-lightning-cli/rules/aura-api'
import secureWindowRule from 'salesforce-lightning-cli/rules/secure-window'
import secureDocumentRule from 'salesforce-lightning-cli/rules/secure-document'
import ecmaIntrinsicsRule from 'salesforce-lightning-cli/rules/ecma-intrinsics'

delete auraApiRule.schema
delete secureWindowRule.schema
delete secureDocumentRule.schema
delete ecmaIntrinsicsRule.schema

const rules = {
  'aura-api': {create: auraApiRule},
  'secure-window': {create: secureWindowRule},
  'secure-document': {create: secureDocumentRule},
  'ecma-intrinsics': {create: ecmaIntrinsicsRule},
}

const rulesConfig = { ...auraComponentConfig.rules, ...codeStyleRulesConfig.rules }
delete rulesConfig['new-rule-template'];

['ecma-intrinsics',
  'secure-document',
  'aura-api',
  'secure-window'].forEach(r => {
  delete rulesConfig[r]
  rulesConfig[`@salesforce/aura/${r}`] = 2
})

module.exports = {
  configs: {
    recommended: {
      env: auraComponentConfig.env,
      parserOptions: auraComponentConfig.parserOptions,
      globals: auraComponentConfig.globals,
      rules: rulesConfig,
    }
  },
  rules
}
