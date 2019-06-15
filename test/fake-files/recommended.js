var VALUE = 2;

function aFunction(param1) {
    if (param1) {
        return param1 * VALUE;
    }

    return null;
}

aFunction(Math.random());
