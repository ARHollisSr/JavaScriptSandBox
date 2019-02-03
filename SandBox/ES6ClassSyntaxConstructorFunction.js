/*
old ES5:
var SpaceShuttle = function(targetPlanet) {
    this.targetPlanet = targetPlanet;
}

var zeus = new SpaceShuttle('Jupiter');

ES6:
class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}

const zeus = new SpaceShuttle('Jupiter');
*/
function makeClass() {
  "use strict";
  /* Alter code below this line */
   class Vegetable {
       constructor(name) {
           this.name = name; 
       }
       
   }
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'