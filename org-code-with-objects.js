// Refresher 

const myObject = {
    property: "Value!",
    otherProperty: 77,
    "obnoxious property": function () {
        // action by function
    },
};


// to retrive data we use either dot notaion . or bracket notation:

console.log(myObject.property); // "Value"
console.log(myObject["obnoxious property"]); // [function]


// objects can be used in two main ways to organize code :

// 1. Group related data and behavior together in one object 

const relatedData = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
};

const relatedBehavior = {
    name: "Alice",
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
relatedBehavior.greet(); // Hello, my name is Alice

// 2. Encapsulate functioality into objects to reduce global variables and 
// improve modularity.

// - objects work as containers, reducing clutter and conflicts
// - can represent real-world entities or logical units of code, making it easy to 
// reuse and maintain without repeating code (DRY concept).

const user = {
    name: "Alice",
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    },
    birthday() {
        this.age += 1;
        console.log(`Happy birthday! You are now ${this.age} years old.`);
    }
};

// avaliable for reuse wherever needed (for he same object)
user.greet();      // Hello, my name is Alice
user.birthday();   // Happy birthday! You are now 31


// Objects as a data structure

// objects is great way to structure data and be able to use later 
// without objects
const playerOneName = "tim";
const playerTwoName = "jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";

// with objects
const playerOne = {
    name: "tim",
    marker: "X",
};

const playerTwo = {
    name: "jenn",
    marker: "O",
};

// we can retrieve and reuse data stroed in objects in many ways , e.g:

function gameOver(winningPlayer) {
    console.log("Congratulations!");
    console.log(`${winningPlayer.name} (${winningPlayer.marker}) is the winner!`);
}

// in this example we use object data to provide name and marker to winning player,
// without creating another conditions or 



// Objects as design pattern

// objects can be used for organizing functionality, using them that way is one if the 
// pilars/specs of OOP (Object Oriented Programmming), where logic stored in methods 
// and then those methods used to interact with data

// properties or attributes os something is expressed as properties, while the ways 
// we can interact with that properties or attributes are expressed as methods.

const car = {
    make: "Volkswagen",
    model: "Golf",
    year: 2026,
    color: "blue",
    priceUSD: 40000,


    // "this" is a keyword which is the easiest way to interact with object. "this" keyword 
    // is used to refer to the object a particular method is called from.

    // a method is just a function assigned to a property
    applyDiscount: function (discountPercentage) {
        const multiplier = 1 - discountPercentage / 100;
        this.priceUSD *= multiplier;

        return this.priceUSD;
    },
    // shorthand way to add a method to an object literal
    getSummary() {
        return `${this.year} ${this.make} ${this.model} in ${this.color}, priced at $${this.priceUSD} (USD).`;
    },
};

console.log(car.applyDiscount(10));



// Exercise 1 – Bank Account
// Create an object bankAccount with:
// Properties: owner, balance
// Methods:
// deposit(amount) → adds to balance and returns new balance
// withdraw(amount) → subtracts from balance if enough money, otherwise prints "Insufficient funds"
// Test: deposit 500, withdraw 200, withdraw 1000

const bankAccount = {
    owner: "Paul",
    balance: 2500,

    deposit: function (amount) {
        this.balance += amount;
        return this.balance;
    },

    withdraw: function (amount) {
        if (this.balance >= amount) {
            this.balance -= amount
        } else {
            console.log('Insufficient funds');
        }
        return this.balance;
    },
}

console.log(bankAccount.deposit(500));
console.log(bankAccount.withdraw(200));
console.log(bankAccount.withdraw(1000));


// objects for more abstract concepts

// we ca describe it as values which going change later and value isnt provided right now,
// good example is RPS game where we wpuld assign playerScore as 0 and computerScore as 0 at 
// the beggining of the game as these values are abstract and will updated according to game 
// results.

// objects properties marked with _ (_someProperty e.g) are assumed to be private and used only
// within thier particular object.



// Objects as machines

// objects in JS can be used in unimaginable amount of ways, some examples are :

// - an object that manages other objects, such as an “inventory” object that contains 
// item objects in an array, and methods that can be done to interact with that array of items
// - an object that can listen for events that happen and respond appropriately (think of 
// .addEventListener on DOM elements)
// - an object that manages all things relating to the DOM, by setting event listeners that call 
// other objects’ methods, and displaying data from other objects on the web page.

// The properties of the machine could be thought as if they were displays that might 
// show information such as:

//  - a list of the items you’ve collected and the maximum number of items you can carry
//  - a list of functions that are listening for an event
//  - the DOM elements for the buttons for interaction, and elements for displaying data

// The methods of your machine might be akin to buttons and such that make the machine do 
// a specific thing, such as:

// - remove an item you own from a list and add new items
// - fire all the functions that are listening to a “click” event, or add a new function to 
// listen to the “click” event
// - read data from somewhere else and set the .textContent of certain DOM elements