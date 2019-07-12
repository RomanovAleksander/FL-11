function addOne(x) {
    return x + 1;
}

function pipe(value) {
    for (let i = 1; i < arguments.length; i++) {
        value = arguments[i](value);
    }
    return value;
}

pipe(1, addOne);
pipe(1, addOne, addOne);
