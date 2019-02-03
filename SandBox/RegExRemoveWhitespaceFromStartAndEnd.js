//use .trim() mainly
let hello = "    Hello, World!   ";
let wsRegex = /^\s+|\s+$/g;
let result = hello.match(wsRegex);
console.log(result);
