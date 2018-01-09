/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

'use strict';
function Cat(name, color){
  this.name = name;
  this.color = color;
}
var cat = new Cat('Fluffy', 'White');

console.log(cat);
/*
Exception: ReferenceError: display is not defined
@Scratchpad/1:17:1
*/

class Cat1{
  constrctor(name, color){
    this.name = name;
    this.color = color;
  }
  speak(){
    window.display(this.name);
    window.display(this.color);
  }
}

var cat1 = new Cat1('Fluffy', 'White');
cat1.speak();

