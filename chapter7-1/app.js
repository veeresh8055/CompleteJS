// Objects 
const pencil = {
 length: "7.5 inches",
 shape: "hexagonal",
 diameter: "1/4 inch",
 write: function(){/*do writing*/},
 erase: function(){/*do erasing*/},
 sharpen: function(){/*do sharpening*/},
}
pencil.sharpen();
pencil.length = "7 inches";
pencil.sharpness = "sharp";
const newPencil = {...pencil};


// JavaScript has four ways to create objects from scratch:
// » Use object literal notation.
        const person = {eyes: 2, feet: 2, eyeColor: 'brown'};
        const person1 = {};
           person.hair = 'black';
           person.hands = 2;
           person.fullName = {firstName:'Lamont',lastName:'Rudnick'};
// » Use the new keyword.
// » Use Object.create().
// » Define a class.

// Making objects using a constructor
// function
function Cat(name, type){
 this.name = name;
 this.type = type;
}
const ourCat = new Cat('Murray', 'domestic short hair');