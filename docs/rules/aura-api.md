# Validate Aura API (`aura-api`)

This rule verifies that use of the framework APIs is according to the published documentation. The use of undocumented or private features is disallowed.

When Lightning Locker is enabled, the framework prevents the use of unsupported API objects or calls. That means your Aura components code is allowed to use:

- Features built into JavaScript (“intrinsic” features).
- Published, supported features built into the Aura Components programming model.
- Published, supported features built into Lightning Locker SecureObject objects.

This rule deals with the supported, public framework APIs, for example, those available through the framework global $A.

Why is this rule called “Aura API”? Because the core of the Aura Components programming model is the open source Aura Framework. And this rule verifies permitted uses of that framework, rather than anything specific to Lightning Components.

## Rule details

The following pattern is considered an error:

```javascript
Aura.something(); // Use $A instead
$A.util.fake(); // fake is not available in $A.util
```

Example of correct code:

```javascript
$A.util.addClass(term);
```
