let quoteSample = "The five boxing wizards jump quickly.";
//note the uppercase W
let nonAlphaRegex = /\W/gi;
let result = quoteSample.match(nonAlphaRegex).length;
console.log(result);
