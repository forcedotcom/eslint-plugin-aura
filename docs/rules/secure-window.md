# Validate Secure Window Public API (`secure-window`)

When LockerService is enabled the Lightning Platform prevents the use of unsupported API objects or calls. That means your Lightning components code is allowed to use:

- Features built into JavaScript ("intrinsic" features)
- Published, supported features built into the Lightning Components framework
- Published, supported features built into the LockerService _SecureThing_ objects

This rule validates that only supported functions and properties of the `window` global are accessed.

Prior to LockerService, when you accessed the `window` global, you could call any function and access any property available. When LockerService is enabled, the `window` global is "wrapped" by a new SecureWindow object, which controls access to `window` and its functions and properties. SecureWindow restricts you to using only "safe" features of the `window` global.

## Rule Details

The following pattern is considered an error:

```js
{
    onclick: function (cmp, evt, help) {
        window.open('bar');
    }
}
```

Example of correct code:

```js
{
    onclick: function (cmp, evt, help) {
        setTimeout(function () {}, 100);
    }
}
```
