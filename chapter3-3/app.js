// objects :
// Here are two important aspects you may have noticed about this object:
// » The values inside an object (which are called properties) can be of
// any combination of the other data types. In fact, these values can be
// (and often are) objects themselves.
// » This object was declared using const. Objects are commonly declared
// as constants. The result is that the object itself is unchangeable, though the
// values inside it can still be changed. I help you explore this interesting facet of
// JavaScript and its implications much more in Chapter 7 of Book 1
const customer = {
    name: 'Laura Wigfall',
    address: '3427 Crummit Lane',
    city: 'Providence',
    state: 'RI',
    zipcode: '02905',
    customerId: 4,
    isInLoyaltyClub: true,
   };

//    Examining the Array — a Special
//    Kind of Object
//    Arrays aren’t primitive data types, but they aren’t exactly objects, either. Arrays
//    are used to store lists of items using a single name. The items inside an array are
//    its elements, and the number you can use to access or modify elements is the index.
//    Arrays are created using square brackets containing comma-separated values.
//    The following example creates an array called favoriteCities:
   const favoriteCities = [
    'Rome',
    'Berlin',
    'New York',
    'Paris',
    'Astoria',
   ];
// to access
favoriteCities[1]; 


// ~~~~~~~~~IMPP ~~~~~~~
// Getting a Handle on Scope
// The location where you declare a variable determines where your program can
// make use of that variable. This concept is called variable scope. JavaScript has three
// kinds of variable scope:
// » Global-scoped variables can be used anywhere inside a program.

// » Function-scoped variables can be used anywhere within the function where it
// was declared. You can read about functions in Book 1, Chapter 8. Functionscoped variables are created using the var keyword.

// » Block-scoped variables are variables created using the let or const keyword
// and initialized inside of a block. A block in JavaScript is a unit of code that starts
// with a left curly brace ({) and ends with a right curly brace (}). Block scoped
// variables can be used anywhere within the block where they are declared.


//Number data type:

// /Symbol data type
// The Symbol data type is used to create unique identifiers in JavaScript. Unlike the
// other data types, even if two symbols appear to be identical and have the same
// name, JavaScript guarantees that they’ll be unique.
// To see this unique nature of Symbol in action, enter the following snippet into
// your browser’s JavaScript console:
let symbol1 = Symbol("mysymbol");
let symbol2 = Symbol("mysymbol");
console.log(symbol1===symbol2) // false

//---> JavaScript stores numbers as 64-bit floating-point values : This means that, in
// theory, the number data type can store any number between 2^–1074 and 2^1024.
// In practice, however, you should use the number data type only to store numbers
// between –2^53–1 and 2^53–1. These numbers are called the maximum and minimum safe integers.

// maximum and minimum safe numbers 
// max num --> 2^53-1
// min num --> -2^53-1

// Working with number functions
// >> parseInt converts a number to an integer by discarding everything after the
// decimal point:
console.log(parseInt(5.343235)) ; // 5

// parseFloat specifically tells JavaScript to treat a number as a float, meaning
// that it will include the portion after a decimal point:
console.log(parseFloat(10.00)) ; // 10 

// --> using parseInt and parseFloat  : 
// One of the most common uses for parseInt and parseFloat is to convert strings
// to numbers. For example, if the user of your web app enters a number into a text
// field, that value is received by your program as a string.

//~~~~~~` Knowing when to convert between sring to number :
let tip = "8.50";
let total = 40;
let tax = 0;
let orderTotal = parseFloat(tip) + tax + total;


// ~~~~Big Int datatype 
let kilometersToAndromedaGalaxy = 23651826000000000000n;

// Boolean data type
// Boolean variables store one of two possible values: either true or false.
// » 3<10
// » 90<10
// » true === false
// » 0!=="0"
// » "apples" === "oranges"

// Converting to Boolean
// Any value in JavaScript can be converted to a Boolean by using the !! operator.
// You can try out this conversion by going back into the JavaScript console and typing some values with !! in front of them — for example:
//       » !!"JavaScript is awesome"
//       » !!"I am the best JavaScript programmer"
//       » !!0
//       » !!""
//       » !!99
//       » !!null

// we can  convert any this into boolean we use !! this notation
// The ! (usually pronounced “bang”) operator is the logical NOT operator. Using
// one ! to the left of a value returns its Boolean opposite. So, two !s returns the
// double opposite, which is how !! can be used to convert a value to its associated
// Boolean value
console.log(!!null) // false
console.log(!!55) // true
console.log(!!'hello') // true
var hello = 'veeresh'
console.log(!!hello) // true
console.log(!!null) // false
console.log(!!undefined) // false
console.log(!!0) // false


// ~~~~~~~~~~~~~~[imp]~~~~~~~``
// ~~~~~ Getting truthy and falsy value: 
// You can always know whether a value, when converted to a Boolean, will be true
// or false by remembering a short list of items that always convert to false. These
// values are called “falsy” in JavaScript:
//     » false
//     » 0 (zero)
//     » -0
//     » 0n (BigInt zero)
//     » "" (an empty string)
//     » null
//     » undefined
//     » NaN
// Everything else is true when converted to Boolean.

// NaN data type : 
// NaN stands for Not a Number. NaN is what you get when you try to perform
// impossible mathematical operations or when you try to perform mathematical
// operations with strings.
// These are examples of operations that return NaN:
// » Math operations where the result is not a real number, such as trying to
// calculate the square root of a negative number:
Math.sqrt(-1)
// » Attempting any mathematical operation involving a string, other than with the
// addition operator:
"yarn" / "cats"
// » Attempting to convert a string to a number:
parseInt("sandwich")

// Undefined data type
// Undefined is the default data type and value of a variable that’s been declared but
// not initialized in JavaScript. It’s also the value that will be returned by a statement
// or function that doesn’t specifically return a value.
// You can see this default return value in action by entering a variable declaration
// into the JavaScript console in your browser. Whenever you run a JavaScript statement or expression in the console, JavaScript must return a value. If the statement
// you run doesn’t specifically have a return value, the returned value is undefined.

