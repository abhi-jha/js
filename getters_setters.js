/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

'use strict';

var cat = {
  name:{
    first: "Fluffy",
    last: "svkjbksv"
  },
  color: "White"
};

Object.defineProperty(cat,'fullname',
  {
  
  get:function(){
    return this.name.first+" "+this.name.last;
  },
  set:function(value){
    var nameParts = value.split(' ');
    this.name.first = nameParts[0];
    this.name.last = nameParts[1];
  }
})

console.log(cat.fullname)
cat.fullname = "Abhi jha";
console.log(cat.name.first);
console.log(cat.name.last);
console.log(cat.fullname)

/*
Exception: TypeError: cat.fullname is not a function
@Scratchpad/4:28:13
*/
/*
Exception: ReferenceError: nameParts is not defined
set@Scratchpad/4:28:5
@Scratchpad/4:34:1
*/