function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        //note the use of the [] instead of just ... 
        //this creates brand new arrays each iteration
        newArr.push([...arr]);
        num--;
    }
    return newArr;
}
console.log(copyMachine([true, false, true], 2));
