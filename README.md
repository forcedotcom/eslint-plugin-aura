eslint-plugin-aura
==================

Salesforce Lightning (Aura) specific linting rules for ESLint

Installation
------------

```sh
npm install --global git+ssh://git@git.soma.salesforce.com:julien-roche/eslint-aura-plugin.git
```

Configuration
-------------
Add plugin to your ESLint configuration with the recommended config. See
[ESLint documentation](http://eslint.org/docs/user-guide/configuring#configuring-plugins) for details.

Example:
```json
{
    "plugins": [ "eslint-plugin-aura" ],
    "extends": [ "plugin:eslint-plugin-aura/recommended" ]
}
```
