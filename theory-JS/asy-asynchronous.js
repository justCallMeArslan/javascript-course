// Asynchronous code


// Callbacks - function passed into another function as an argument, which is then invoked 
// inside outer function to complete some kind of routine action.

myDiv.addEventListener("click", function(){
  // do something!
})


// Promise is mechanism that tells browser/compiler to wait until some procees ends:

const getData = function() { 
  // go fetch data from some API... 
  // clean it up a bit and return it as an object:
  return data
}

// any fetchig can take time, depending on many factors, so if we want ti use that functions :

const myData = getData()
const pieceOfData = myData['whatever']

// pieceOfData can give us troubles, as fetching can take long and, so ong that pieceOfData already 
// executed , but fetching is not (returns undefined). 
// Excatly, but not only, for cases like that we can use Promise :

const myData = getData() // if this is refactored to return a Promise

myData.then(function(data){ // .then() tells it to wait until the promise is resolved
  const pieceOfData = data['whatever'] // and THEN run the function inside
})

// then() tells to wait until fetching is completed, and only after that executes 
// request from piecOfData



// JS is sigle threaded progrmming language, so it can do one thing at a time

// Call stack example :

function hello () {
    console.log("Hello World");
}

function print () {
    hello();
}

function greet() {
    print()
}

greet();

//order of execution 

// Call flow (call stack push):

// [empty]
// greet() 
// -> print() 
//    -> hello() 
//       -> log() 


// Return flow (call stack pop)

// log() returns
// hello() returns 
// print() returns
// greet() returns
// [empty]

// Event process should not be slowed with fetching/image rendering and etc, 
// for that sake we use callbacks which will be run simultaneously (under the hood).
// Cbs will be sent to queue and will be passed to call stack whenever its queued 
// (setTimeout example) or when call stack empty.


const array = [1, 2, 3];

array.forEach(function (i) { 
  console.log(i);
})

// call stack operation : 

// whole array + forEach runs in CS and logs run one by one for each element of array


function asyncForEach (array, cb) {
  array.forEach(function (i) {
    setTimeout(()=> cb(i), 0);
  });
}

asyncForEach(array, function (i) {
  console.log(i);
})

// call stack operations: 

// asyncForEach runs and calls for array.forEach(), which later calls cb in setTimeout. 
// cb (anonymous()/log) will be passed into WebAPI and later to call queue , from which it will be
// added to call stack one by one (when is empty and each previous anonymous()/log popped out);


// setTimeout delay time is the time when task sent to task queue, not into call stack

// After the current synchronous code finishes, the event loop empties the microtask 
// queue completely before processing the next task from the macrotask (callback) queue.

// Micotask queue scheduled by :

// Promises handlers 
// queueMicrotasks 
// async function bodies after await resolved
// mutation observer callbacks
// (Node.js) process.nextTick() — higher priority than microtasks

new Promise ((resolve) => {
  console.log(1);
  resolve(2)
}).then (result=> console.log(result));

console.log(3);

// answer 1 3 2 

// A Promise starts synchronously, but its completion handlers (then/catch/finally)
// always run asynchronously.


// functon after new Promise called executor

// the Executor function should call only one resolve or one reject

// state and result are internal. we can directly access them, but by using methods
// such as .then/.catch/.finally.

