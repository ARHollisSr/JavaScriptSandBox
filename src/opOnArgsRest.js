function sum(arg, ...additionalArgs) {
  var sum = 0;
  
  if (additionalArgs.length > 0) {
    sum += additionalArgs.reduce((a, b) => a + b, 0);
  }
  sum += arg;
  return sum;
  
}
