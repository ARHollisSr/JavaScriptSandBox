function multiMax(first, ...remainingNumbers) {  // rest param
  var sorted = remainingNumbers.sort(function(a, b) {
    return b - a;  // sort remaining number desc
  });
  return first * sorted[0];
}
