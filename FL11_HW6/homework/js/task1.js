let result;
const denominator = 2;
const a1 = +prompt('Enter x coordinate of point A:', ''),
    a2 = +prompt('Enter y coordinate of point A:', ''),
    c1 = +prompt('Enter x coordinate of point C:', ''),
    c2 = +prompt('Enter y coordinate of point C:', ''),
    b1 = +prompt('Enter x coordinate of point B:', ''),
    b2 = +prompt('Enter y coordinate of point B:', '');

if ((a1 + b1) / denominator === c1 && (a2 + b2) / denominator === c2) {
    result = true;
} else {
    result = false;
}

console.log(result);
