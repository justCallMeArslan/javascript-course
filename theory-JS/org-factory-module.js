// Scoopful of scopes


// global scope - variable outside of any {curly bracers};
// function scope - variable inside functions {curly bracers} or in (parentheses);
// block scope - variable inside any {curly bracers} (e.g loops, conditions (else/if));


// Closures


function makeAddingFunction1(firstNumber) {
    return function returnedFunction(secondNumber) {
        return firstNumber + secondNumber;
    }
}

// we can use functions to create another functions (example above)

const add50 = makeAddingFunction1(5);
console.log(add50(2)); // 7

const add80 = makeAddingFunction1(8);
console.log(add80(2)); // 10

const add791001051100 = makeAddingFunction1(79100105110);
console.log(add791001051100(111687378)); // 79211792488



function makeAddingFunction(firstNumber) {
    return function returnedFunction(secondNumber) {
        firstNumber++;
        return firstNumber + secondNumber;
    }
}

const add5 = makeAddingFunction(5);
console.log(add5(2)); // 8
console.log(add5(2)); // 9


const add8 = makeAddingFunction(8);
console.log(add8(2)); // 11
console.log(add8(10)); // 20 (9 from last + ++ + 10);


const add79100105110 = makeAddingFunction(79100105110);
console.log(add79100105110(111687378)); // 79211792488

// closure saves value of previous operation and function call, thats why in makeAddingFunction()
// we see incremented by 1 numbers getting used as default values for another call and recieve
// another increment in that call (add 5 and add8 examples)


// What is wrong with constructs? 


// - chaining can become complicated and lead to errors.
// - no safeguards(without new ad additional safegurds program fails to work and creates errors, 
// which can be difficult to track).


// Factory functions


// factory function are very similar to general functions, probably the only difference is that 
// they return {object} and they dont have new keyword.

// constructor
function User(name) {
    this.name = name;
    this.discordName = "@" + name;
}


// factory function
function createUser(name) {
    const discordName = "@" + name;
    return { name, discordName }; // if we have variable with the same key: property names, we can 
    // write them once name:name = name, discordName: discordName = discordName
}



// ________________________________________________________________________________________________
// another technique we have is "destructuring", which allows us extract a property of object 
// into variable of the same name, or any named variable for an array:

const obj = { a: 1, b: 2 };
const { a, b } = obj;

// or arrays 

const arr = [1, 3, 5, 7, 9];
const [zeroth, first] = arr;

//__________________________________________________________________________________________________



// Private variables and functions


function createUser(name) {
    const discordName = "@" + name;

    let reputation = 0; // private variable, means it cant be accessed from object, but only via 
    // closure functions:
    const getReputation = () => reputation; // closure functions
    const giveReputation = () => { reputation++; }; // closure function with increment

    return { name, discordName, getReputation, giveReputation }; //return the same key:property obj
}

const josh = createUser("josh");
josh.giveReputation(); // calling closure function to increment reputation 
josh.giveReputation(); // repeat to increment again


console.log({
    discordName: josh.discordName,
    reputation: josh.getReputation() // calling inner function (closure) to check value of 
    // private variable reputation 
}); // { discordName: '@josh', reputation: 2 }


