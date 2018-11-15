let text = "Happy cheese and hyphen hooray for the elephants hollidays";
let myRegex = /h[a-z]?y/gi;
let result = text.match(myRegex);
console.log(result);
