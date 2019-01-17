function multiplier(factor) {
  return val => val * factor;
}

let twice = multiplier(2);
console.log(twice(5));
