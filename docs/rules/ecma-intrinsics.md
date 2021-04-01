# Validate JavaScript Intrinsic APIs (`ecma-intrinsics`)

When LockerService is enabled the Lightning Platform prevents the use of unsupported API objects or calls. That means your Lightning components code is allowed to use:

- Features built into JavaScript ("intrinsic" features)
- Published, supported features built into the Lightning Components framework
- Published, supported features built into the LockerService _SecureThing_ objects

This rule deals with the intrinsic APIs in JavaScript, more formally known as ECMAScript.

What exactly are these "intrinsic APIs"? They're the APIs defined in the [ECMAScript Language Specification](https://tc39.github.io/ecma262/). That is, things built into JavaScript. This includes Annex B of the specification, which deals with legacy browser features that aren't part of the "core" of JavaScript, but are nevertheless still supported for JavaScript running inside a web browser.

Note that some features of JavaScript that you might consider intrinsic—for example, the `window` and `document` global variables—are superceded by _SecureThing_ objects, which offer a more constrained API.

## Rule Details

This rule verifies that use of the intrinsic JavaScript APIs is according to the published specification. The use of non-standard, deprecated, and removed language features is disallowed.

The following pattern is considered an error:

```js
{
    onclick: function (cmp, evt, help) {
        Array.prototype.foo();
    }
}
```

Example of correct code:

```js
{
    onclick: function (cmp, evt, help) {
        Array.prototype.slice();
    }
}
```

## Further Reading

- [ECMAScript specification](https://tc39.github.io/ecma262/)
- [Annex B: Additional ECMAScript Features for Web Browsers](https://tc39.github.io/ecma262/#sec-additional-built-in-properties)
- [Intrinsic Objects (JavaScript)](<https://msdn.microsoft.com/en-us/library/4zx5dkc9(v=vs.94).aspx>)
