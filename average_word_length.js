function avgWordLengthCalc(string) {
    if (string.length <= 0) {
        return 0;
    }
    let words = string.split(/[\s.,!?=:;]+/);
    let totalLength = 0;
    for (let wordKey in words){
        if (words.hasOwnProperty(wordKey)) {
            if (words[wordKey].length <= 0){
                words = words.slice(0, wordKey);
            } else {
                totalLength = totalLength + words[wordKey].length;
            }
        }

    }

    return (totalLength / words.length).toFixed(2);
}

a = avgWordLengthCalc("q w e r t y.");
b = avgWordLengthCalc("The reduce method executes a reducer function."); // 5.57
c = avgWordLengthCalc("callback is called, accumulator!"); // 6.75
d = avgWordLengthCalc("");
console.log(a);
console.log(b);
console.log(c);
console.log(d);
