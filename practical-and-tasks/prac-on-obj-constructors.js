// Working with prototype

// Here’s the code that creates a pair of objects, then modifies them.
// Which values are shown in the process?
// There should be 3 answers.

let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

console.log( rabbit.jumps ); // ? (1)

delete rabbit.jumps;

console.log( rabbit.jumps ); // ? (2)

delete animal.jumps;

console.log( rabbit.jumps ); // ? (3)








// Searching algorithm

// The task has two parts.

// Use __proto__ to assign prototypes in a way that any property lookup will follow the path: 
// pockets → bed → table → head. For instance, pockets.pen should be 3 (found in table), and 
// bed.glasses should be 1 (found in head).
// Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? 
// Benchmark if needed.

// Given the following objects:

let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};







// Where does it write?

// We have rabbit inheriting from animal.
// If we call rabbit.eat(), which object receives the full property: animal or rabbit?

let animal1 = {
  eat() {
    this.full = true;
  }
};

let rabbit1 = {
  __proto__: animal
};

rabbit.eat();






// Why are both hamsters full?

// We have two hamsters: speedy and lazy inheriting from the general hamster object.
// When we feed one of them, the other one is also full. Why? How can we fix it?

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
console.log( speedy.stomach ); // apple

// This one also has it, why? fix please.
console.log( lazy.stomach ); // apple