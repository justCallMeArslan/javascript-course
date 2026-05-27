// JS info practical

// Exercise 1
// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

// For instance:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// Make 3 solution variants:

// Using a for loop.
// Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
// Using the arithmetic progression formula.
// An example of the result:

// function sumTo(n) {
//     /*... your code ... */
// }

// alert(sumTo(100)); // 5050

// P.S. Which solution variant is the fastest? The slowest? Why?

// P.P.S. Can we use recursion to count sumTo(100000)?


// for loop version 

function sumToForLoop(n) {
    let total = 0;
    for (let i = n; i > 0; i--) {
        total += i;
    }

    return total;
}

console.log(sumToForLoop(100)); //5050


// recursion version 

function sumToRecursion(n, total = 0) {
    if (n <= 0) {
        return total;
    } else {
        return sumToRecursion(n - 1, total + n);
    }
}

console.log(sumToRecursion(100)) // 5050


// arithmetic formula


// S = n (a + 1) / 2;
// where a is first term which is 1 , and l is last term which is n (1 + 2... + n);

function sumToArithmetic(n) {
    return n * (1 + n) / 2;
}

console.log(sumToArithmetic(4)); // 5050


// Exercise 2

// Calculate factorial
// The factorial of a natural number is a number multiplied by "number minus one", then by "number minus two", and so on till 1. The factorial of n is denoted as n!

// We can write a definition of factorial like this:

// n! = n * (n - 1) * (n - 2) * ...*1
// Values of factorials for different n:

// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// The task is to write a function factorial(n) that calculates n! using recursive calls.

// alert( factorial(5) ); // 120
// P.S. Hint: n! can be written as n * (n-1)! For instance: 3! = 3*2! = 3*2*1! = 6

function factorial(n) {
    if (n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));



// Exercise 3

// Fibonacci numbers
// The sequence of Fibonacci numbers has the formula Fn = Fn-1 + Fn-2. In other words,
// the next number is a sum of the two preceding ones.

// First two numbers are 1, then 2(1+1), then 3(1+2), 5(2+3) and so on: 1, 1, 2, 
// 3, 5, 8, 13, 21....

// Fibonacci numbers are related to the Golden ratio and many natural phenomena around us.

// Write a function fib(n) that returns the n-th Fibonacci number.

// An example of work:

// function fib(n) { /* your code */ }

// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757
// P.S. The function should be fast. The call to fib(77) should take no more than 
// a fraction of a second.


// recursion

function fibRecur(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibRecur(n - 1) + fibRecur(n - 2);
    }
}
console.log(fibRecur(7));



// for loop version 

function fibLoop(n) {
    let a = 0;
    let b = 1;

    for (let i = 2; i <= n; i++) { // i = 2 to start loop from position 3 in fib sequence
        let temp = a + b;
        a = b;  // a is always takes first last number inprevious sum
        b = temp; // b is always last number as its takes sum total
    }
    return b;
}

console.log(fibLoop(7))



// Exercise 4

// Output a single-linked list
// Let’s say we have a single-linked list (as described in the chapter Recursion and stack):

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

// Write a function printList(list) that outputs list items one-by-one.
// Make two variants of the solution: using a loop and using recursion.
// What’s better: with recursion or without it?


// recursion 

function printList(l) {
    if (l === null) {
        return;
    }

    console.log(l.value);
    printList(l.next);
}

printList(list);


// while loop version

function printListWhileLoop(l) {

    while (l !== null) {
        console.log(l.value);
        l = l.next;
    }
}

printListWhileLoop(list);


// for loop 

function printListForLoop(l) {
    for (let node = l; node !== null; node = node.next) {
        console.log(node.value);
    }
}

printListForLoop(list);


// Output a single-linked list in the reverse order
// Output a single-linked list from the previous task Output a single-linked list in the reverse order.

// Make two solutions: using a loop and using a recursion.

// Recursion reversed 

function printReversedList(l) {
    if (l === null) {
        return;
    }

    printReversedList(l.next);
    console.log(l.value);

}

printReversedList(list);


// loop reversed version 

function printReversedListWhileLoop(l) {

    let arr = []; // array is required to reverse, loop cant be easily reverted


    while (l) {
        arr.push(l.value);
        l = l.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) { // start from last index, until reach 0, backward
        console.log(arr[i]); // print array after every loop iteration
    }
}

printReversedListWhileLoop(list);