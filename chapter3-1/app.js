//in this chapter
// using let and const to store data
// intro to Js Data Types
// creating and using Objects
// storing list with arraya
// understanding Js Scope

// Making Variables with let:
let phoneNumber;
phoneNumber = 3636366363;

let seven = 7;
let eight = 8;
let sum = seven + eight;

// Using variables

console.log(sum);

// Making Constants with const

// » typeof "1"  [string]  
// » typeof 0    [Number]
// » typeof true [boolean]
// » typeof "true" [string]
// » typeof a    [undefined]
// » typeof "a"   [string]

// \’ Single quote
// \" Double quote
// \\ Backslash
// \n New line
// \r Carriage return
// \t Tab
// \b Backspace
// \f Form feed

//  Using a template literal string
let orderTotal = 39.99;
let itemPurchased = 'JavaScript All-in-One For Dummies';
let customer = 'Joe Q. Developer';
let thankYou = `${customer}, thank you for your order of ${itemPurchased}. Your
payment of ${orderTotal} was successful.`;