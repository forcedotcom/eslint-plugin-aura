# eslint-plugin-aura

[![Build Status](https://travis-ci.org/forcedotcom/eslint-plugin-aura.svg?branch=master)](https://travis-ci.org/forcedotcom/eslint-plugin-aura)
[![NPM version](https://img.shields.io/npm/v/@salesforce/eslint-plugin-aura.svg)](https://www.npmjs.com/package/@salesforce/eslint-plugin-aura)

Salesforce Lightning (Aura) specific linting rules for ESLint.

## Installation

```sh
npm install --save-dev @salesforce/eslint-plugin-aura
```

## Usage

Add this plugin to your ESLint configuration and extend your desired configuration. See
[ESLint documentation](http://eslint.org/docs/user-guide/configuring#configuring-plugins) for details.

Example:

```json
{
  "plugins": ["@salesforce/eslint-plugin-aura"],
  "extends": [
    "plugin:@salesforce/eslint-plugin-aura/recommended",
    "plugin:@salesforce/eslint-plugin-aura/locker",
  ]
}
```

## Configurations

This package exposes 2 configurations for your usage.

### `@salesforce/eslint-plugin-aura/recommended` configuration

**Goal:**
Prevent common pitfalls with Lightning component development, and enforce other Salesforce platform restrictions.

**Rules:**

- Many of the [_Best Practices_](https://eslint.org/docs/rules/#best-practices) rules.
- Proper usage of the `$A` global, via the [`aura-api`](https://github.com/forcedotcom/eslint-plugin-aura/blob/master/docs/rules/aura-api.md) rule.
- Browser compatibility rules for [Salesforce supported browsers](https://help.salesforce.com/articleView?id=sf.getstart_browsers_sfx.htm&type=5).

### `@salesforce/eslint-plugin-aura/locker` configuration

**Goal:**
Prevent [Lightning Locker](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/security_code.htm) violations.

**Rules:**

- `@salesforce/eslint-plugin-aura/recommended` rules.
- Proper usage of `document` and `window` via the [`secure-document`](https://github.com/forcedotcom/eslint-plugin-aura/blob/master/docs/rules/secure-document.md) and [`secure-window`](https://github.com/forcedotcom/eslint-plugin-aura/blob/master/docs/rules/secure-window.md) rules, respectively.
- Proper usage of Javascript intrinsic APIs via the [`ecma-intrinsics`](https://github.com/forcedotcom/eslint-plugin-aura/blob/master/docs/rules/ecma-intrinsics.md) rule.
