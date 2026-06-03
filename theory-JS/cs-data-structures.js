// Queue:

// 1. Elements are sorted by insertion order
// 2. First element in is first out ( Exit 1 , 2, 3 Add, FIFO)
// 3. Elements in queue have no index (cant be called)
// 4. Can only add to back and remove from front.

// example of queue: 

function a() {
    console.log("a");
}

function b() {
    console.log("b");
}

function c() {
    console.log("c");
}

a(); b(); c()

// queue takes executes calls in the order they were called  (output: "a", "b", "c")



// Stack: 

// 1. Elements are sorted by insertion order.
// 2. Last element in is first out LIFO
// 3. Elements have no index 
// 4. Can oly add (push) to top and remove (pop) from top.

// example of stack :

function a() {
    console.log("a");
    b();
}

function b() {
    console.log("b");
    c();
}

function c() {
    console.log("c");
}

a();

// call stack push order: a(), b() , c(), so c() was last in 
// call stack pop/return order: c(), b(), a(), so c() is first out
// output: "a", "b", "c"