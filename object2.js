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
  name: 'Fluffy',
  color: 'White'
};
cat["Eye Color"] = "black";
console.log(cat.color);
console.log(cat['color']);
console.log(cat);
Object.defineProperty(cat,'name',{writable:false});
console.log(Object.getOwnPropertyDescriptor(cat,'name'));

var cat1 ={
  name:{
    first: "Fluffy",
    last: "fvj"
  },
  color: "White"
};
//Object.freeze(cat1.name);
Object.defineProperty(cat1, 'name',{writable:false});
cat1.name.first = 'Scratchy';
console.log(Object.getOwnPropertyDescriptor(cat1,'name'));

/*
Exception: TypeError: "first" is read-only
@Scratchpad/2:32:1
*/

Object.defineProperty(cat1,'name',{enumerable:false});
console.log(Object.keys(cat1));
for(var property in cat1)
  console.log(property + ':' + cat1[property]);
/*
Exception: TypeError: "first" is read-only
@Scratchpad/2:32:1
*/

console.log(JSON.stringify(cat1));

console.log(cat1["name"]);