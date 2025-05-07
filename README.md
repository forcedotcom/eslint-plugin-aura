# eslint-plugin-aura

[![Build status](https://circleci.com/gh/forcedotcom/eslint-plugin-aura.svg?style=shield)](https://circleci.com/gh/forcedotcom/eslint-plugin-aura)
[![NPM version](https://img.shields.io/npm/v/@salesforce/eslint-plugin-aura.svg)](https://www.npmjs.com/package/@salesforce/eslint-plugin-aura)

Salesforce Lightning (Aura) specific linting rules for ESLint.

## Installation

```sh
npm install --save-dev @salesforce/eslint-plugin-aura
```

## Usage

> [!IMPORTANT]
> Starting with v3.0.0, `@salesforce/eslint-plugin-aura` only supports `eslint@v9`. Use `@salesforce/eslint-plugin-aura@v2.x` for older versions of ESLint.

Add this plugin to your ESLint configuration and extend your desired configuration. See
[ESLint documentation](https://eslint.org/docs/latest/use/configure/plugins) for details.

Example `eslint.config.js`:

```js
const eslintAura = require('@salesforce/eslint-plugin-aura');
module.exports = [
  ...eslintAura.configs.recommended,
  ...eslintAura.configs.locker,
];
```

## Rules

### Aura

| Rule ID                                                                                   | Description                                                                         |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [aura/aura-api](./docs/rules/aura-api.md)                                                 | validate Aura APIs                                                                  |
| [aura/getevt-markup-prefix](./docs/rules/getevt-markup-prefix.md)                         | verify the presence of the `markup://` prefix for events accessed via `$A.getEvt()` |
| [aura/no-deprecated-aura-error](./docs/rules/no-deprecated-aura-error.md)                 | prevent usage of `$A.error`                                                         |
| [aura/no-deprecated-component-creation](./docs/rules/no-deprecated-component-creation.md) | prevent usage of deprecated component creation methods                              |
| [aura/no-deprecated-event-creation](./docs/rules/no-deprecated-event-creation.md)         | prevent usage of deprecated event creation methods                                  |

### Locker

| Rule ID                                                 | Description                          |
| ------------------------------------------------------- | ------------------------------------ |
| [aura/ecma-intrinsics](./docs/rules/ecma-intrinsics.md) | validate JavaScript intrinsic APIs   |
| [aura/secure-document](./docs/rules/secure-document.md) | validate secure document public APIs |
| [aura/secure-window](./docs/rules/secure-window.md)     | validate secure window public APIs   |

## Configurations

This package exposes 2 configurations for your usage.

### Recommended configuration

**Goal:**
Prevent common pitfalls with Lightning component development, and enforce other Salesforce platform restrictions.

**Rules:**

- Many of the [_Best Practices_](https://eslint.org/docs/rules/#best-practices) rules.
- Proper usage of the `$A` global, via the [`aura-api`](https://github.com/forcedotcom/eslint-plugin-aura/blob/master/docs/rules/aura-api.md) rule.
- Browser compatibility rules for [Salesforce supported browsers](https://help.salesforce.com/articleView?id=sf.getstart_browsers_sfx.htm&type=5).

**Usage**

```js
// eslint.config.js
const eslintPluginAura = require('@salesforce/eslint-plugin-aura');

module.exports = [...eslintPluginAura.configs.recommended];
```

#### Migration to ESLint v9

The recommended configurations extend ESLint's `js/recommended` [predefined configuration](https://eslint.org/docs/latest/use/configure/configuration-files#using-predefined-configurations) (previously known as `eslint:recommended`). ESLint v9 has added 4 new rules to the recommended config, you can read about that [here](https://eslint.org/docs/latest/use/migrate-to-9.0.0#eslint-recommended). You can opt to turn these off for backwards compatibility.

```js
// eslint.config.js
const eslintAura = require('@salesforce/eslint-plugin-aura');
module.exports = [
  ...eslintAura.configs.recommended,
  {
    rules: {
      'no-empty-static-block': 'off',
      'no-constant-binary-expression': 'off',
      'no-new-native-non-constructor': 'off',
      'no-unused-private-class-members': 'off',
    },
  },
];
```

### Lightning Locker configuration

**Goal:**
Prevent [Lightning Locker](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/security_code.htm) violations.

**Rules:**

- `@salesforce/eslint-plugin-aura/recommended` rules.
- Proper usage of `document` and `window` via the [`secure-document`](https://github.com/forcedotcom/eslint-plugin-aura/blob/master/docs/rules/secure-document.md) and [`secure-window`](https://github.com/forcedotcom/eslint-plugin-aura/blob/master/docs/rules/secure-window.md) rules, respectively.
- Proper usage of Javascript intrinsic APIs via the [`ecma-intrinsics`](https://github.com/forcedotcom/eslint-plugin-aura/blob/master/docs/rules/ecma-intrinsics.md) rule.

**Usage**

```js
// eslint.config.js
const eslintPluginAura = require('@salesforce/eslint-plugin-aura');

module.exports = [...eslintPluginAura.configs.locker];
```
