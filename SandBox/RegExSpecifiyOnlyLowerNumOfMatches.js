let haStr = "Hazzzzzah";
let haRegex = /Haz{4,}ah/i;
let result = haRegex.test(haStr);
console.log(result);
