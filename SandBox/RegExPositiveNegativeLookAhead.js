let sampleWord = "atsronaut";
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/;
let result =  pwRegex.test(sampleWord);
console.log(result);
