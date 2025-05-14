// Using Arrays

// 3 ways to create array 
// Creating Arrays
// JavaScript contains three ways to create arrays. You can use
// » The Array() constructor:
// » Array literal notation
// » Functions that return arrays, such as split()

// » The Array() constructor:
const myArray = new Array();
const myArray1 = new Array('January','February','March');

//Using array literal notation
const myArray3 = ["eggs","bacon","toast"];

// Using the split function :
// The split() function makes an array out of a string. To use split(), give it the
// character (or characters) that you want to use to split the string. For example, if
// you have a text file containing comma-separated values, you can turn it into an
// array by splitting it on the comma:
let customerData = 'Barb Seibert,3739 Sheila Lane,Goldfield,NV,89013';
const customerDataArray = customerData.split(',');

