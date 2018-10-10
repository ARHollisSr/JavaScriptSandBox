function ninja() {
  // non strict mode
  return this;
}

function samurai() {
  'use strict';
  return this;
}

/*
When the function is invoked as a function as opposed to a method, it hasn't specified an
object on which the function shoulbe be invoked. It would make more sense that the this keyword
should also be set to undefined as in strict mode versus being set to a global window object in non strict mode. 

Example of how strict mode fix JavaScript oddities.
*/