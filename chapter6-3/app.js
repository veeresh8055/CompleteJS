// Mapping an array
// The map() array function takes a callback function and returns a new array with
// the result of applying the callback function to each element of the array

const ingredients = [
 'eggs',
 'milk',
 'cheese',
 'garlic',
 'onion',
 'kale',
 'salt',
 'pepper',
];
let listItems = ingredients.map(
 (singleIngredient) => `<li>${singleIngredient}</li>`
);

// Filtering arrays

const animalNames = [
 'aardvark',
 'alligator',
 'alpaca',
 'bear',
 'beaver',
 'cat',
 'dog',
 'elephant',
];
const animalsStartingWithA =
 animalNames.filter((animal) => animal.startsWith('a')
);

// Destructuring Arrays
// Destructuring is the process of unpacking values from an array or an object into
// separate variables. One way to destructure an array is to just create multiple new
// variables and assign elements from an array to them, like this:
const person = ['Russell C. Guy','3447 Twin House Lane','Neosho','MO'];
let personName1 = person[0];
let address2 = person[1];
let city4 = person[2];
let state5 = person[3];
// 
// But there's an easier way to initialize these individual variables, all in one step:
// destructuring syntax. To use array destructuring syntax, create a list of variable
// names in square brackets on the left side of the assignment operator and specify
// an array on the right

let [personName,address,city,state] = person;


// Spreading Arrays

// Spread syntax expands (or spreads) an iterable object (such as an array) into its
// component parts. To use spread syntax, preface the name of an array with three
// dots (. . .). Spread syntax is often used to pass all values of an array into a function
// or to copy the values from one array into another:

const firstArray = ['a','b','c'];
const secondArray = [...firstArray,'d'];

// A copy of an array created using spread syntax is called a shallow copy because it
// contains just the values from the original array and has no reference to the original array.