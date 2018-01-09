/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

'use strict';

var arr = ['red','blue','green'];
Object.defineProperty(Array.prototype,'last',{
         get:function(){
            return this[this.length-1];
         }
})

console.log(arr.last);

var arr1 = [1,2,3,"feouwh"];
console.log(arr1.last);
/*
Exception: SyntaxError: missing ) after argument list
@Scratchpad/5:13
*/
/*
Exception: TypeError: can't redefine non-configurable property "last"
@Scratchpad/5:13:1
*/

var ar2 = new Array(1,2,3);
console.log(ar2);
/*
Exception: TypeError: can't redefine non-configurable property "last"
@Scratchpad/5:13:1
*/