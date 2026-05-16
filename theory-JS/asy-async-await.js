// async functions is just syntactical sugar for promises. When function is declared 
// with async it auto returns promises, returning in async function is the same like 
// resolve promises. 
// when function declared witth async (async functiom () or async ()=> ) it requires
// await. 


// await tells JS to wait for async action to finish before continuing the function, 
// in other words : pause until done
// instead of .then() we after asynchro function we aassign a var to the result 
// using await

// errors can be handled by .catch(), because async function return a promise, so appending
// .catch() will do : 

asyncFnCall().catch(err => {
    console.error(err);
})

// another way is try...catch statement, if we want to handle an error inside async 
// function : try..catch and async/await is way to go. IF JS thows err in the try
// block, the catch block code will run instead: 

async function getPersonsInfo(name) {
    try {
        const people = await server.getPeople();
        const person = people.find(person => { return person.name === name });
        return person;
    } catch (error) {
        // Handle the error any way you'd like
    }
}
