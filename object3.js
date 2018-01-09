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
    last: "svljb"
  },
  color:"White"
}

//Object.defineProperty(cat,'name',{configurable:false});
Object.defineProperty(cat,'name',{enumerable:false});
delete cat.name;
/*
Exception: TypeError: can't redefine non-configurable property "name"
@Scratchpad/3:21:1
*/
/*
Exception: TypeError: can't redefine non-configurable property "name"
@Scratchpad/3:21:1
*/
/*
Exception: TypeError: property "name" is non-configurable and can't be deleted
@Scratchpad/3:22:1
*/