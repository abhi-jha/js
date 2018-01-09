/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

'use strict';

function Cat(name,color){
  this.name = name;
  this.color = color;
}

Cat.prototype.age = 4;

var fluffy = new Cat('Fluffy', 'White');
var muffin = new Cat('Mufin', 'Brown');

//fluffy.age = 5;

console.log(fluffy.age);
console.log(fluffy.__proto__.age);
console.log(fluffy.hasOwnProperty('age'));