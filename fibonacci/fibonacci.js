const fibonacci = function(n) {
        let allNumArr = [1, 1];
        let fNumber = Number(n); // converting strings to numbers
        if (fNumber <= 0) { // for NaN cases
            return "OOPS"
        } else {
            for (i = 0;allNumArr.length < fNumber; i++) {
                allNumArr.push(allNumArr[i] + allNumArr[i + 1]);
            }
        } 
        return allNumArr[fNumber - 1];

}

module.exports = fibonacci
