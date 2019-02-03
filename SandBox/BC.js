

function countBs(a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === 'B') count++;
  }
  console.log(count);
}

function countChar(a, b) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b) count++;
  }
  console.log(count);
}

countBs('BarBie is a BaBe');
countChar('Mississippi', 's');