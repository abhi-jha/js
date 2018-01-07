/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

//for(var i = 0;i<10;i++)
//  alert(i);

/*var x = 3;
if(x%3===0)
  alert('fizz');
else
  alert('buzz')
*/
var randomNumber = Math.round(Math.random()*15);
var str = ''
if(randomNumber%3===0 && randomNumber!=0)
  str = str + 'fizz';
if(randomNumber%5===0 && randomNumber!=0)
  str = str + 'buzz'

if(str==='')
  alert(randomNumber);
else
  alert(str);