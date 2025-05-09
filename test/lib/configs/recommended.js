'use strict';

const assert = require('assert');
const { ESLint } = require('eslint');

const eslintPluginAura = require('../../../lib');

const eslint = new ESLint({
  overrideConfigFile: true,
  baseConfig: [...eslintPluginAura.configs.recommended],
});

describe('Recommended config', () => {
  it('reports a parsing error when using an ES6 syntax', async () => {
    const [result] = await eslint.lintText('const a = 1;');

    assert.strictEqual(result.messages.length, 1);

    const parsingError = result.messages[0];
    assert.ok(parsingError.fatal);
    assert.ok(parsingError.message.match(/^Parsing error:/));
  });

  it("doesn't report error for known Aura globals", async () => {
    const [result] = await eslint.lintText(`
      $A.enqueueAction();
      FORCE.location.getCurrentPage();
    `);

    assert.strictEqual(result.messages.length, 0);
  });

  it("doesn't report error for Aura libraries", async () => {
    const [result] = await eslint.lintText(`
      Promise.resolve();
      moment();
    `);

    assert.strictEqual(result.messages.length, 0);
  });

  it('reports a linting error when using an unkown Aura API', async () => {
    const [result] = await eslint.lintText('$A.util.fake();');

    assert.strictEqual(result.messages.length, 1);

    const compatError = result.messages[0];
    assert.strictEqual(compatError.ruleId, '@salesforce/aura/aura-api');
    assert.strictEqual(compatError.messageId, 'invalidApi');
  });
});
