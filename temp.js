function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    let propToCompare = Object.keys(source);
    let getPropNames = Object.getOwnPropertyNames(source);
   
    for (let i=0; i < collection.length; i++)
    {
        for(var x in collection[i])
        {
            collection[i][x];
        }
    }
      // do something with your new variables
    

    // Only change code above this line
    return arr;
  }
  whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })
  //whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { //first: "Tybalt", last: "Capulet" }], { last: "Capulet" });