/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
function sayHello(name){
  console.log(name);
}
for(i =0;i<10;i++)
  sayHello(i);
sayHello('Hi MArk');
sayHello();
console.log(typeof(sayHello()))
/*
Exception: ReferenceError: type is not defined
@Scratchpad/4:16:1
*/