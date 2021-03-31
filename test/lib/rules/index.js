'use strict';

const fs = require('fs');
const path = require('path');
const assert = require('assert');

const ROOT_DIR = path.resolve(__dirname, '../../..');

const RULES_FOLDER = path.resolve(ROOT_DIR, './lib/rules');
const RULE_FILES = fs.readdirSync(RULES_FOLDER);

const DOC_FILES = fs.readdirSync(path.resolve(ROOT_DIR, './docs/rules'));

const README_CONTENT = fs.readFileSync(
  path.resolve(ROOT_DIR, './README.md'),
  'utf-8'
);

const plugin = require(path.resolve(ROOT_DIR, 'lib/index.js'));

describe('rules exports', () => {
  RULE_FILES.forEach((ruleFile) => {
    const ruleName = path.basename(ruleFile, '.js');

    it(`should export "${ruleFile}"`, () => {
      assert.strictEqual(
        plugin.rules[ruleName],
        require(path.resolve(ROOT_DIR, './lib/rules', ruleName)),
        `Rule "${ruleName}" is not exported.`
      );
    });
  });
});

describe('rules documentation', () => {
  RULE_FILES.forEach((ruleFile) => {
    const ruleName = path.basename(ruleFile, '.js');

    it(`should have a documentation file for "${ruleName}"`, () => {
      assert(
        DOC_FILES.includes(`${ruleName}.md`),
        `No associated documentation for "${ruleName}".`
      );
    });

    it(`should have an entry in README.md for "${ruleName}"`, () => {
      assert(
        README_CONTENT.includes(
          `| [aura/${ruleName}](./docs/rules/${ruleName}.md)`
        ),
        `Rule "${ruleName}" is not listed in the README.md.`
      );
    });

    it(`it should have a documentation url for "${ruleName}"`, () => {
      const rulePath = path.resolve(RULES_FOLDER, ruleFile);
      const ruleModule = require(rulePath);

      assert(
        typeof ruleModule.meta.docs.url === 'string',
        `Rule "${ruleName}" doesn't have a documentation url.`
      );
    });
  });
});
