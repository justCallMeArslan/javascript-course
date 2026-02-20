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

console.log(rabbit.jumps); // true

delete rabbit.jumps;

console.log(rabbit.jumps); // null

delete animal.jumps;

console.log(rabbit.jumps); // undefined




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

Object.setPrototypeOf(pockets, bed);
Object.setPrototypeOf(bed, table);
Object.setPrototypeOf(table, head);

console.time("head");
for (let i = 0; i < 1e7; i++) {
  head.glasses;
}
console.timeEnd("head");

console.time("pockets");
for (let i = 0; i < 1e7; i++) {
  pockets.glasses;
}
console.timeEnd("pockets");


// answer: it seams like its almost the same time on check, but my take will be that the 
// value of head.glasses willbe slithly faster then pockets.glassesm cause its direct 
// child of head object :


// Where does it write?

// We have rabbit inheriting from animal.
// If we call rabbit.eat(), which object receives the full property: animal or rabbit?

let animal1 = {
  eat() {
    this.full = true;
  }
};

let rabbit1 = {
  __proto__: animal1
};

rabbit1.eat();


// answer : rabbit1 as in JS .full will refer to callig object instead of object 
// where its defined.





// Why are both hamsters full?

// We have two hamsters: speedy and lazy inheriting from the general hamster object.
// When we feed one of them, the other one is also full. Why? How can we fix it?

let hamster = {
  stomach: [],

  eat(food) {
    //  this.stomach.push(food);  instead of pushing items into array (adds to it)
    this.stomach = [food]; // we use "=" and refresh array with every new data (as a new one)
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
};

Object.setPrototypeOf(lazy, hamster)

// This one found the food
speedy.eat("apple");
console.log(speedy.stomach); // apple

// This one also has it, why? fix please.
// lazy.eat("cucumber"); used as check that concept crystal clear
console.log(lazy.stomach); // apple

