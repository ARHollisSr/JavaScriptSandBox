let quoteSample = "The five boxing wizards jump quickly";
let alphaRegex = /\w/gi;
let result = quoteSample.match(alphaRegex).length;
console.log(result);
