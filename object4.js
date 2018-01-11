/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

'use strict';
class Animal{
  constructor(voice){
    this.voice = voice || 'grunt';
  }
  speak(){
    console.log(this.voice);
  }
};

class Cat extends Animal{
  constructor(name,color){
    super('Meow');
    this.name = name;
    this.color = color;
  }
};

var fluffy = new Cat('Fluffy','Green');
fluffy.speak();

console.log(Object.keys(fluffy.__proto__._proto__));
console.log(fluffy.__proto__.__proto__.hasOwnProperty('speak'));
ssss