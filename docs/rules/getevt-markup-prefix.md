# Ensure `$A.getEvt` is prefixed with `markup://` (`getevt-markup-prefix`)

When using `$A.getEvt()`, the prefix to the first parameter should be `markup://`.

## Rule Details

The following pattern is considered an error:

```js
$A.getEvt('c:appEvent');
```

Example of correct code:

```js
$A.getEvt('markup://c:appEvent');
```
