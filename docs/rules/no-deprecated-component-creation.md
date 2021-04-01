# Prevent usage of deprecated component creation methods (`no-deprecated-component-creation`)

All the component creation APIs outside `$A.createComponent` are deprecated.

## Rule Details

The following pattern is considered an error:

```js
$A.newCmp('ui:button');
```

Example of correct code:

```js
$A.createComponent('ui:button', params, callback);
```
