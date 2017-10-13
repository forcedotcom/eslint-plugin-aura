eslint-plugin-aura
==================

Salesforce Lightning (Aura) specific linting rules for ESLint

This package is a bare wrapper of [salesforce-lightning-cli](https://www.npmjs.com/package/salesforce-lightning-cli) that makes it usable as an ESLint plugin.

Installation
------------

Install [ESLint](https://www.github.com/eslint/eslint) and Salesforece Lightning plugin.
```sh
$ yarn add --dev eslint @salesforce/eslint-plugin-aura
```

Configuration
-------------
Add plugin to your ESLint configuration with the recommended config. See
[ESLint documentation](http://eslint.org/docs/user-guide/configuring#configuring-plugins) for details.

Example:
```json
{
    "plugins": [ "@salesforce/eslint-plugin-aura" ],
    "extends": [ "plugin:@salesforce/eslint-plugin-aura/recommended" ]
}
```
