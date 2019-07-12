function reverseNumber(value) {
    let reverse = 0;
    while (value !== 0) {
        let lastDigit = value % 10;
        reverse = (reverse * 10) + lastDigit;
        value = parseInt(value / 10);
    }
    return reverse;
}

reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);
