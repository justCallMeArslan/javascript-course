// Test - driven development(TDD), is a new age evolutionary approach to development
// which emphasizes test - first development. Here you write a test before you write 
// just enough production code to fulfill that test and then go on to refactor the code.

// Pure function is a function which will always return same results/values 

function square(x) {
    return x * x
}

//or

function sum (a, b) { //if we provide same parameters we always receive same results
    return a + b;
}


// example of impure function is:

function randomNum () { // everytime we call we get different result
    return Math.random();
}


