// LOOPING WITH ARRAYS 
// Passing callback functions
// to array methods
// A function is a program within your program. It receives data and does something
// with it. As with any program, a function stops running when it’s done with its job,
// and it may return some data to the rest of the program.

function squareIt(num){
 return num*num;
}
squareIt(3);
let threeSquared = squareIt(3);


// Reducing an array

let prices = [4.99,3,98,54.99];
let total = 0;
total = prices.reduce(
 function(previousValue,currentValue){
 return previousValue + currentValue;
 }
)
total = prices.reduce(
 function(previousValue,currentValue){
 return previousValue + currentValue;
 }
)

let total1= prices.reduce(
 (previousValue,currentValue) => previousValue + currentValue,0);