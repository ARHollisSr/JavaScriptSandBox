let a = 8, b = 6;
(() => {
  "use strict";
  
  //note: a & b are already defined so no need for a const
  //as that will create an undefined
  [b,a] = [a,b];
  //const is ok in this instance because we are assigning during intialization
  const [o,g] = [9,10];
  console.log(o,g);
})();
console.log(a); // should be 6
console.log(b); // should be 8