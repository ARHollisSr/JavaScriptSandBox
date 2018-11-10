//\d$* designates only numbers at the end, zero or more
//\d*$/i designates the above plus letters can be upper and lower case
//^[a-z]{2,}\d$/i designates teh above plus usernames have to be at
//least two characters long and two letter usernames must be alpha only
let userName = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}\d*$/i;
let result = userCheck.test(userName);
console.log(result);
