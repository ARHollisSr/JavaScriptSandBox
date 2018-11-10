let sample = "White space is important in seperating words.";
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace).length;
console.log(result);
