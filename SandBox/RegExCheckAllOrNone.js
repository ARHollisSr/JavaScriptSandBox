//Specify the existence of a element with the "?"
//Checks for zero or one of the preceding element
let favword = "favorite";
let favRegex = /favou?rite/;
let result = favRegex.test(favword);
console.log(result);
