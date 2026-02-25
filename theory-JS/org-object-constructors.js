// Object constructors

// object constructor is a better way to create specific  object which will 
// require multiple properties. Object constructor is actually a function:

function Player(name, age) {
    this.name = name;
    this.age = age;
}

// the difference is that we have to use new in order to call that fucntion:

const player = new Player("Rasul", "8");
console.log(player.name, player.age);

// its not the same if we would call it as function (without new keyword). Calling 
// function with new, creating "new" object, makes "this" inside the function refer
// to that object, and maks that object inherit from function's .prototype property.
// the new object returned. Just like created using the OLM (object literal method), 
// functions can be added to the object:

function Gamer(name, gamertag) {
    this.name = name;
    this.gamertag = gamertag;
    this.sayName = function () {
        console.log(this.name);
    };
    this.callByGamertag = function () {
        console.log(this.gamertag);
    };
}

const gamerOne = new Gamer("Suleiman", "Sulik");
const gamerTwo = new Gamer("Mansur", "Little Bear");

gamerOne.sayName() + console.log("a.k.a.");
gamerOne.callByGamertag();
gamerTwo.sayName() + console.log("a.k.a.");
gamerTwo.callByGamertag();


// there is a good practice to prevent usage constructors without "new":
//   if (!new.target) {
//     throw Error("You must use the 'new' operator to call the constructor");
//   }


// Write a constructor for making “Book” objects.We will revisit this in the next 
// project.Your book objects should have the book’s title, author, the number of pages, 
// and whether or not you have read the book.

// Put a function info() into the constructor that can report the book info like so:
// console.log(theHobbit.info()); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet


function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus}`
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, "not read yet");

console.log(theHobbit.info());


// Prototype

// All objects in JS have a [[Prototype]].

// - You can check the object’s [[Prototype]] by using the Object.getPrototypeOf() 

// The [[Prototype]] is another object...
// Prototype objects can have properties and functions, (just as "Player" from above) such as .name, 
// .age, .etc and function as sayName(), countDeposit(), etc.

// ... that the oriiginal object inherits from, and has access to all of its 
// [[Prototypes]]'s properties or functions, if they have been defined. 
// For example, if there was a .sayHello() function defined on the [[Prototype]], 
// player1 can access the function just as if it was its own function - player1.sayHello(). 



let x = {};

const a11 = Object.getPrototypeOf(x);
console.log(x); // {}
console.log(a11); // [Object:null] {}


// JS tutorials on "this"

// in global scope this refernces the global object which is window

// this === window; // true

// this.color = red;
// console.log(window.color); // red

// - The this keyword refers to object that’s currently execute a function.
// - When you call a function, the this inside the function refers to the global object 
// in non-strict mode or undefined in strict mode.
// - When you call a function as a method of an object, this refers to the object 
// that owns the method.
// - When you use a function as a constructor with the new keyword, this is set to 
// newly created object.
// - The call() and apply() methods allow you to explicitly set the value of this 
// when you call a function.
// - Arrow functions do not have their own this. Instead, they use this from the 
// surrounding code where they were defined.
