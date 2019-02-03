<<<<<<< HEAD
let text = "Happy cheese and hyphen hooray for the elephants hollidays";
let myRegex = /h[a-z]?y/gi;
=======
let text = "<h1>Winter is coming</h1>";
let myRegex =/<h1*>/;
>>>>>>> 94c9251054ccc4d5be0341c06a33fbe792ba2602
let result = text.match(myRegex);
console.log(result);
