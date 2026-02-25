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