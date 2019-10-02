# Validate Aura Service

This rule verifies that the Aura service is welly defined.

When you define a service, you create a javascript file with a javascript function.
The function name should have the same name as the javascript file.

## Rule details

If I have "myService.js" to declare my Aura servoce

The following pattern is considered an error:

```javascript
function aaa() {
  // ....
}
```

Example of correct code:

```javascript
function myService() {
  // ....
}
```
