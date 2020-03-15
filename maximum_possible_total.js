function maxTotal(array) {
    array.sort(function(a, b){return a - b}).reverse();
    let sumMaxTotal = 0;
    for (let numKey = 0; numKey < 5; numKey++){
        sumMaxTotal += array[numKey];
    }
    return sumMaxTotal;
}

a = maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]); // 43
b = maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]); // 100
c = maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 40


console.log(a);
console.log(b);
console.log(c);
