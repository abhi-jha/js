/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var obj = {};

obj.param ='new value';

console.log(obj.param);

obj.param1 = 'aother value';

obj['val'] = 'value';
console.log(obj.param1);
console.log(obj['param1']);
console.log(obj['val']);
var nextObj = Object.create(Object.prototype);

var lastObj = new Object();



/*
Exception: TypeError: console.lgo is not a function
@Scratchpad/2:14:1
*/
/*
Exception: ReferenceError: ob is not defined
@Scratchpad/2:21:1
*/