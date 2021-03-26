const assert = require('assert');
const { ESLint } = require('eslint');

const eslintPluginAura = require('../../../lib');

const eslint = new ESLint({
  useEslintrc: false,
  baseConfig: eslintPluginAura.configs.recommended,
  plugins: {
    '@salesforce/eslint-plugin-aura': eslintPluginAura,
  },
});

describe('Recommended config', () => {
  it('reports a parsing error when using an ES6 syntax', async () => {
    const result = await eslint.lintText('const a = 1;');

    assert.strictEqual(result.length, 1);

    const parsingError = result[0].messages.find((msg) => msg.ruleId === null);
    assert.ok(parsingError !== undefined);
    assert.ok(parsingError.message.match(/^Parsing error:/));
  });

  it('reports a linting error when using a web platform API not available on IE11', async () => {
    const result = await eslint.lintText('fetch("http://example.com");');

    assert.strictEqual(result.length, 1);

    const compatError = result[0].messages.find(
      (msg) => msg.ruleId === 'compat/compat'
    );
    assert.ok(compatError !== undefined);
    assert.ok(compatError.message.match(/^fetch is not supported in.* IE 11/));
  });

  // it("doesn't report error known Aura globals", async () => {
  //   const result = await eslint.lintText('$A');
  //   console.log(result)
  // });

  it('reports a linting error when using an unkown Aura API', async () => {
    const result = await eslint.lintText('$A.util.fake();');

    assert.strictEqual(result.length, 1);

    const compatError = result[0].messages.find(
      (msg) => msg.ruleId === '@salesforce/aura/aura-api'
    );
    assert.ok(compatError !== undefined);
    assert.strictEqual(compatError.messageId, 'invalidApi');
  });
});
