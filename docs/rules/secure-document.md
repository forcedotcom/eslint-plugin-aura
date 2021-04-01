# Validate Secure Document Public API (`secure-document`)

When LockerService is enabled the Lightning Platform prevents the use of unsupported API objects or calls. That means your Lightning components code is allowed to use:

- Features built into JavaScript ("intrinsic" features)
- Published, supported features built into the Lightning Components framework
- Published, supported features built into the LockerService _SecureThing_ objects

This rule validates that only supported functions and properties of the `document` global are accessed.

Prior to LockerService, when you accessed the `document` global, you could call any function and access any property available. When LockerService is enabled, the `document` global is "wrapped" by a new SecureDocument object, which controls access to `document` and its functions and properties. SecureDocument restricts you to using only "safe" features of the `document` global.

## Rule Details

The following pattern is considered an error:

```js
{
    onclick: function (cmp, evt, help) {
        var content = document.innerHTML;
    }
}
```

Example of correct code:

```js
{
    onclick: function (cmp, evt, help) {
        var el = document.getElementById('foo');
    }
}
```
