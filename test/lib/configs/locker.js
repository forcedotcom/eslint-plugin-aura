'use strict';

const assert = require('assert');
const { ESLint } = require('eslint');

const eslintPluginAura = require('../../../lib');

const eslint = new ESLint({
  overrideConfigFile: true,
  baseConfig: eslintPluginAura.configs.locker,
  plugins: {
    '@salesforce/eslint-plugin-aura': eslintPluginAura,
  },
});

describe('Locker config', () => {
  it('reports a linting error when using a blocked window API ', async () => {
    const [result] = await eslint.lintText(
      'window.setImmediate(function() {});'
    );

    assert.strictEqual(result.messages.length, 1);

    const lintError = result.messages[0];
    assert.strictEqual(lintError.ruleId, '@salesforce/aura/secure-window');
    assert(lintError.message.indexOf('Invalid SecureWindow API') >= 0);
  });

  it("doesn't report error for supported window API", async () => {
    const [result] = await eslint.lintText('window.setTimeout();');

    assert.strictEqual(result.messages.length, 0);
  });
});
