let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphaBetRegex = /[a-z]/ig;
let result = alphaBetRegex.test(quoteSample);
console.log(result);
