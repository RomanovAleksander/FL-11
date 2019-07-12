function getMin() {
    let minItem = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (minItem > arguments[i]) {
            minItem = arguments[i];
        }
    }
    return minItem;
}

getMin(3, 0, -3);
