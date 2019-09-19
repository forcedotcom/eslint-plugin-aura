/**
 * The header component
 */

function fakeService() {
    function myMethod() {
        return Math.random();
    }

    return {
        'a': 'avalue',
        'myMethod': myMethod,
        'mySecondMethod': function mySecondMethod() {
            return myMethod() * Math.random();
        }
    };
}
