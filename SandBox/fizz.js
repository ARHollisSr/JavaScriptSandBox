// print num 1 to 100
// nums div by 3 print fizz instead of the number
// nums div by 5 print buzz instead of the number
// when the above works:
// print fizzbuzz for numbers divisble by 3 and 5
// and still print fizz or buzz for nums divsible by either 3 or 5

/*
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0) {
    if (i % 5 == 0) {
      console.log('FizzBuzz Fizz');
    } else {
      console.log('Fizz');
    }
  } else if (i % 5 == 0) {
    if (i % 3 == 0) {
      console.log('FizzBuzz Buzz');
    } else {
      console.log('Buzz');
    }
  } else {
    console.log(i);
  }
}*/

for (let n = 1; n <= 100; n++) {
  let output = '';
  if (n % 3 == 0) output += 'Fizz';
  if (n % 5 == 0) output += 'Buzz';
  console.log(output || n);
}