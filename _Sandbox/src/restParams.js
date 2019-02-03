function multiMax(first, ...remainingNumbers) {
  var sorted = remainingNumbers.sort((a, b) => b - a);
  return first * sorted[0];
}