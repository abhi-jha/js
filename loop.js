/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
//var num = prompt('Enter a number : ')
//for( var i = 0; i<11 ; i++){
//  console.log(i);
//}
for (i = 1; i <= 100; i++) {
  str = ''
  if (i % 3 === 0)
  str = str + 'fizz';
  if (i % 5 === 0)
  str = str + 'buzz';
  if (str === '')
  console.log(i);
   else
  console.log(str);
} /*
Exception: SyntaxError: missing ; before statement
@Scratchpad/2:23
*/
/*
Exception: ReferenceError: num is not defined
@Scratchpad/2:23:5
*/
/*
undefined
*/


