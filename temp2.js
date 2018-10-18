function destroyer(arr) {
  // Remove all the values
  let args = [];
  
  for (let i=1; i < arguments.length; i++)
  {
    args.push(arguments[i]);
  }

  return arr.filter(item => !args.includes(item));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));