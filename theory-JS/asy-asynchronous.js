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

var fs = require('fs')
var myNumber = undefined

function addOne(callback) {
  fs.readFile('number.txt', function doneReading(err, fileContents) {
    myNumber = parseInt(fileContents)
    myNumber++
    callback()
  })
}

function logMyNumber() {
  console.log(myNumber)
}

addOne(logMyNumber)