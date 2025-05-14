// LOOPS IN JSS
// 1. for loop 
// 2. while loop 
// 3. do while loop
// 4. for..in loop
// 5. for..of loop

// 1. for loop
for(let i=1; i <= 100; i++) {
    console.log(i);
   }

//    for . . . in loops
// The for ... in loop iterates over the properties of an object and the properties it
// inherits from its parent object. Because arrays are types of objects, it's possible to
// use for ... in loops to loop over the elements in an array as well.
const house = {  sqft:800,
     bdRooms:2, 
     bthRooms:1
    }

    // for . . . of loops
    // The for ... of loop creates a loop by iterating over any iterable object. What's
    // an iterable object, you ask? An iterable object is an object that can be iterated over.
    // Examples of iterable objects include arrays and strings.
    const pets = ['cat', 'dog', 'chicken'];
   for (let pet of pets) {
        console.log(pet);
    }

    let text = "spell me.";
for (let character of text) {
 console.log(character);
}

// while loops
// do . . . while loops
// A do ... while loop works the same as a while loop, except that the condition
// goes after the code block. The result is that the code between the do ... while's
// curly braces is guaranteed to run at least once.

// break and continue statements:
let phoneNumber = "555-757-1212";
for (let digit of phoneNumber) {
 if (digit==='-') continue;
 console.log(digit);
}
