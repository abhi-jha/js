/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var myCoffee = {
  flavour : "espresso",
  temperature: "piping hot",
  ounces: 100,
  milk: true,
  
  reheat: function(){
    if(myCoffee.temperature === 'cold'){
        myCoffee.temperature = 'piping hot';
        alert("Your coffee has been reheated");
    }
  }
};

console.log(myCoffee.flavour);
myCoffee.temperature = 'cold';//Syntax 1
myCoffee["temperature"] = "lukewarm"; // Syntax 2
myCoffee.reheat();

/*
Exception: ReferenceError: myCOffee is not defined
@Scratchpad/5:26:1
*/


var mark = {
  name: "Mark",
  tshirtColor: "Blue"
};

function Friend(name,tshirtColor){
  this.name = name;
  this.tshirtColor = tshirtColor;
}

var denny = new Friend("Abhi","Blue");
console.log(denny);
console.log(denny.name);
console.log(denny.tshirtColor);
/*
Exception: SyntaxError: missing ; before statement
@Scratchpad/5:45
*/
/*
Exception: SyntaxError: missing ; before statement
@Scratchpad/5:45
*/