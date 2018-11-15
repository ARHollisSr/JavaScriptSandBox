let numString = "Your sandwich will be %5.00";
let numRegex = /\d/g;
let result = numString.match(numRegex).length;
console.log(result);
