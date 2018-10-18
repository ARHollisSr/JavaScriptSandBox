function diffArray(arr1, arr2) {
let firstArr = arr1.sort();
let secondArr = arr2.sort();
let found = false;
var newArr = [];
var supsectValue;
for (let i=0; i < firstArr.length; i++)
{
    for(let j=0; j < secondArr.length; j++)
    {
      found = false;
      if (firstArr[i] === secondArr[j])
      {
        found = true;
        break;
      }
      else
      {
        newArr.pop();
        supsectValue = secondArr[j];
        newArr.push(supsectValue);

      }
      
      }
}

return newArr;
}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));