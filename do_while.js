/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var i = 0;
do{
  console.log(i);
  i++;
}while(i<11);
/*
Exception: SyntaxError: missing while after do-loop body
@Scratchpad/3:14
*/
/*
Exception: SyntaxError: expected expression, got '<'
@Scratchpad/3:14
*/

while(prompt('Enter value')==='x'){
  console.log('x');
}
/*
Exception: ReferenceError: promt is not defined
@Scratchpad/3:24:7
*/