eslint-plugin-aura
==================

[![Build Status](https://travis-ci.org/forcedotcom/eslint-plugin-aura.svg?branch=master)](https://travis-ci.org/forcedotcom/eslint-plugin-aura)
[![NPM version](https://img.shields.io/npm/v/@salesforce/eslint-plugin-aura.svg)](https://www.npmjs.com/package/@salesforce/eslint-plugin-aura)

Salesforce Lightning (Aura) specific linting rules for ESLint

Installation
------------

```sh
npm install --global @salesforce/eslint-plugin-aura
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
