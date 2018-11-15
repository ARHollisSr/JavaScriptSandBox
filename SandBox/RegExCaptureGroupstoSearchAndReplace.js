let huhText = "This sandwhich is good";
let fixRegex = /good/;
let replaceText = "okey-dokey";
let result = huhText.replace(fixRegex, replaceText);

//you can allso acceess caputre groups in the replacement string
//with $
let anotherResult = "Day Happy".replace(/(\w+)\s(\w+)/, '$2 $1'); //returns Happy Day
console.log(result);
console.log(anotherResult);
