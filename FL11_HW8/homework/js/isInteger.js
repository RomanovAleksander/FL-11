function isInteger(value) {
    return typeof value === 'number' && value % 1 === 0;
}

isInteger(5);
isInteger(5.1);
