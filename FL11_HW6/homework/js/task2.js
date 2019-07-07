let result;
const a = +prompt('Enter the AB length of triangle:', ''),
    b = +prompt('Enter the BC length of triangle:', ''),
    c = +prompt('Enter the CA length of triangle:', '');

if (a + b > c && b + c > a && a + c > b) {
    if (a === b && b === c && c === a) {
        result = 'Eequivalent triangle'
    } else if (a === b || b === c || c === a) {
        result = 'Isosceles triangle'
    } else {
        result = 'Normal triangle'
    }
} else {
    result = 'Triangle doesn’t exist'
}

console.log(result);
