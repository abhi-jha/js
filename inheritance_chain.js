/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

'use strict';

function Animal(voice){
  this.voice = voice || 'grunt';
}

Animal.prototype.speak = function(){
  console.log(this.voice);
}

function Cat(name, color,voice){
  Animal.call(this,voice);//prototype chain
  this.name = name;
  this.color = color;
}

Cat.prototype = Object.create(Animal.prototype);//prototype chain
Cat.prototype.constructor = Cat;//prototype chain
var fluffy = new Cat('Fluffy','Green','sdclj');
fluffy.speak();

console.log(fluffy);
console.log(fluffy instanceof Cat);
console.log(fluffy instanceof Animal);
console.log(fluffy.__proto__.__proto__);