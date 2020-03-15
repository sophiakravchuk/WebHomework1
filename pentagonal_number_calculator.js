function pentagonalNumber(n) {
    return (3*n*n - n)/2;
}

a = pentagonalNumber(1); // 1
b = pentagonalNumber(2); // 5
c = pentagonalNumber(5); // 35
d = pentagonalNumber(9); // 117

console.log(a);
console.log(b);
console.log(c);
console.log(d);