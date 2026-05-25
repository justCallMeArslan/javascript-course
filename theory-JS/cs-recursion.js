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


// Example 1

// for loop

function countDown(n) {
    for (let i = n; i > 0; i--) {
        console.log(i);
    }
    console.log("Hooooray");
}

countDown(1);


// recursive 

function countDownRecursive(n) {
    if (n <= 0) {
        console.log("Hoooooray");
        return
    }
    console.log(n);
    countDownRecursive(n - 1);
}

countDownRecursive(1);


// Example 2


function sumRange(n) {
    let total = 0;
    for (let i = n; i > 0; i--) {
        total += 1;
    }
    return total;
}

console.log(sumRange(15));


function sumRangeRecursive(n, total = 0) {
    if (n <= 0) {
        return total
    }
    return sumRangeRecursive(n - 1, total + n);

}

console.log(sumRangeRecursive(3));


// Example 3 


function printChildren(t) {
    // ????
}

function printChildrenRecursive(t) {
    if (t.children.length === 0) {
        return;
    }
    t.children.forEach(ch => {
        console.log(ch.name);
        printChildrenRecursive(ch);

    });

}

const tree = {
    name: "Meyrambek",
    children: [
        {
            name: "Kotybar",
            children: []
        },
        {
            name: "Perdegul'",
            children: [
                {
                    name: "Bolatbek",
                    children: []
                },
                {
                    name: "Rizabek",
                    children: [{
                        name: "Baurbek",
                        children: []
                    },
                    {
                        name: "Zhandarbek",
                        children: []
                    }]
                }
            ]
        },
        {
            name: "Emshekgul'",
            children: []
        }
    ]
};

printChildrenRecursive(tree);



// 5 simple steps 

// 1. What is the simplest possible input?
// 2. Play around with examples and visualize 
// 3. Relate hard cases to simpler cases
// 4. Generalize the pattern 
// 5. Write code by combaning recursive pattern with the base case