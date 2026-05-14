// practice:

new Promise((resolve) => {
  console.log("A");
  resolve("B");
}).then((value) => {
  console.log(value);
});

console.log("C");

// answer : A C B (+)

new Promise((resolve) => {
  resolve(10);
})
  .then((x) => {
    return x + 5;
  })
  .then((y) => {
    console.log(y);
  });

// answer : 15 (return stop execution!) (+)


console.log(1);

new Promise((resolve) => {
  console.log(2);
  resolve(3);
}).then((x) => {
  console.log(x);
});

console.log(4);


// answer: 1 , 2, 4, 3 (+)


const p = new Promise((resolve) => {
  resolve("X");
});

p.then((v) => console.log("A", v));
p.then((v) => console.log("B", v));


// answer: A, X , B, X  (+)


new Promise((resolve) => {
  resolve(1);
  console.log("after resolve");
}).then((x) => {
  console.log(x);
});

// answer:  after , 1 (+)


// Practice from JS.info:

let promise = new Promise(function (resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);

// answer 1, because resolve will take only first resolve and resolve(1) will
// go to call stack and outputs first




// Delay with a promise
// The built-in function setTimeout uses callbacks. Create a promise-based alternative.

// The function delay(ms) should return a promise. That promise should resolve 
// after ms milliseconds, so that we can add .then to it, like this:

function delay(ms) {
  // your code
}

delay(3000).then(() => alert('runs after 3 seconds'));

// solution 

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
delay(3000).then(() => alert('runs after 3 seconds'));




// Animated circle with promise
// Rewrite the showCircle function in the solution of the task Animated circle 
// with callback so that it returns a promise instead of accepting a callback.

// The new usage:

showCircle(150, 150, 100).then(div => {
  div.classList.add('message-ball');
  div.append("Hello, world!");
});


//solution

function go() {
  showCircle(150, 150, 100).then(div => {
    div.classList.add('message-ball');
    div.append("Hello, world!");
  });
}

function showCircle(cx, cy, radius) {
  let div = document.createElement('div');
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + 'px';
  div.style.top = cy + 'px';
  div.className = 'circle';
  document.body.append(div);

  return new Promise(resolve => {
    setTimeout(() => {
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';

      div.addEventListener('transitionend',
        function handler() {
          div.removeEventListener('transitionend', handler);
          resolve(div);
        });
    }, 0);

  })
}