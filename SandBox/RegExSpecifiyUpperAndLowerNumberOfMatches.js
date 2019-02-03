//note: you need to use the Oh and no to statisfy the pattern
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/;
let result = ohRegex.test(ohStr);
console.log(result);
