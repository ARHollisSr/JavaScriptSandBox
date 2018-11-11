let repeatNum = "42 42 42";
//note that to use the second capture group for the
//same value we added \1 at the end -- man WTF read up more on this
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);
let result2 = repeatNum.match(reRegex);
console.log(result);
console.log(result2);
