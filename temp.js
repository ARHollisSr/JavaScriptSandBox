function diffArray(arr1, arr2) {
  var newArr = [];
  arr1.sort();
  arr2.sort();
  // Same, same; but different.
  for (item in arr1)
  {
      if(item != arr2.indexOf(item))
          newArr.push(arr2.indexOf(item))
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
