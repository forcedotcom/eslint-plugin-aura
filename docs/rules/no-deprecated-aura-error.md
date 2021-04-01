# Prevent usage of `$A.error` (`no-deprecated-aura-error`)

The [`$A.error`](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/ref_jsapi_dollarA_error.htm) is deprecated. Error in Aura components should be reported by throwing a native JavaScript `Error` via `throw new Error()`.

## Rule Details

The following pattern is considered an error:

```js
$A.error('Something wrong happened!');
```

Example of correct code:

```js
throw new Error('Something wrong happened!');
```
