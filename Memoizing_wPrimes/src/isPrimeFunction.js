function isPrime(value) {
  if (!isPrime.answers) {  // has the answer property been created?
    isPrime.answers =
        {};  // crate the cache -- this only occurs one first call to func
  }

  if (isPrime.answers[value] !==
      undefined) {                  // has the value already been cached?
    return isPrime.answers[value];  // yes? Return the result
  }

  var prime = value !== 1;  // 1 is not prime
  for (var i = 2; i < value; i++) {
    if (value % i === 0) {
      prime = false;
      break;
    }
  }
  return isPrime.answers[value] = prime;
}