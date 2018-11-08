let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);
let anotherResult = exampleStr.match(unRegex);
console.log(anotherResult);
console.log(result);
