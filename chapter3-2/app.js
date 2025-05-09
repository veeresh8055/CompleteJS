//working with String function
// » charAt tells you the character at a specified position (starting with position 0):
let randomLetters = "pdfsdj";
randomLetters.charAt(4);


//  » concat combines two or more strings and returns the result:
let houseNumber = "555";
let streetName = "Shady Lane";
houseNumber.concat(" ", streetName);

// » indexOf searches your string and returns the position of the first occurrence
// of the character or string you specify:
let typeOfTree = "Pine";
typeOfTree.indexOf("e");

// » split splits strings into an array of substrings:
let vowelsList = "a,e,i,o,u";
vowelsList.split(",");

// » substring extracts the characters within a string between two specified
// positions. If the first number is larger than the second, substring reverses
// them:
let phoneNumber = "313-555-1234";
phoneNumber.substring(12, 4);

// » slice works the same as substring, but it returns an empty string ("") if the
// first number is larger than the second:
let phoneNumber1 = "313-555-1234";
phoneNumber1.slice(4, 12);

// » replace finds a string and replaces it with another string:
let message = "Learn FORTRAN.";
message.replace("FORTRAN", "JavaScript");

// » toLowerCase returns a string with all the characters converted to lowercase:
let username = "ChrisMinnick";
username.toLowerCase();

// » toUpperCase returns a string with all the characters converted to uppercase:
let stateName = "texas";
stateName.toUpperCase();
