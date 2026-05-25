//Recursion is good replacement for iteraition.

// For example we are going to use collatz sequence:

function collatz(n) {
    if (n === 1) {
        return 0
    } else if ((n % 2) === 0) {
        return 1 + collatz(n / 2)
    } else {
        return 1 + collatz(3 * n + 1)
    }
}

console.log(collatz(12)); //1 1 1 1 1 1 1 1 1 = 9
console.log(collatz(16)); // 1 1 1 1  = 4
console.log(collatz(48)); // 1 1 1 1 1 1 1 1 1 1 1 = 11 


// Example of for loop into recursive function 

function countDown(n) {
    for (let i = n; i > 0; i--) {
        console.log(i);
    }
    console.log("Hooooray");
}

countDown(20);