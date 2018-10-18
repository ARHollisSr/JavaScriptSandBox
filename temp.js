function sumAll(arr) {
  let arrTemp = arr.sort((a, b) => a - b);
  let midPoint = parseInt(arrTemp.reduce((a, b) => a + b) / 2);
  let newArray = [] 
  let index = arrTemp.length + midPoint;
  let counter = arrTemp[0];

  for (let i = 0; i <= index - 1; i++) {
    newArray.push(counter++);
  }

  return newArray.reduce((a, b) => a + b);
}

console.log(sumAll([5, 10]));