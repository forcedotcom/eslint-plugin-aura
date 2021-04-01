# Prevent usage of deprecated event creation methods (`no-deprecated-event-creation`)

## Rule Details

The following pattern is considered an error:

```js
$A.get('e.ns:something');
```

Example of correct code:

```js
$A.get('e.something');
$A.get('e:something');
```
