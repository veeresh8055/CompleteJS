


// Control Flow statements 
//  1 if statement 
//  2 if else statement 
//  3 if else if statements 
let country = "United States"

if (country === "United States" || country === "Liberia"){
    temperature = temperature + "F";
   } else {
    temperature = (temperature - 32) * 5 / 9 + "C";
   }


// another ex
if (pet === 'cat') {
    greeting = 'Good kitty';
   } else if (pet === 'dog') {
    greeting = 'Who\'s a good boy or girl?';
   } else if (pet === 'parrot') {
    greeting = 'Wanna cracker?';
   } else {
    greeting = 'Hi.';
   }


//    The ternary operator
const dt = Date();
const hours = dt.getHours();
let msg;
msg = hours < 12 ? ('Good morning!') : ('Welcome');
console.log(msg);


// Switch statements:
switch(expression){
    case x:
    // code to run when expression === x
    break;
    case y:
    // code to run when expression === y
    break;
    default:
    // code to run if nothing else matches expression
   }
