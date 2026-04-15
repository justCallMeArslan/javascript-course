// Following SOLID guides and principles are helpful for understanding where and when 
// use OOP, such as factory functions, objects , etc:

// example of sigle resposibility

function isGameOver() {  // object for checking is game over or not

    // game over logic goes here!

    if (gameOver) { // DOM creates div as a window to declare winner, should be out if object
        const gameOverDiv = document.createElement('div');
        gameOverDiv.classList.add('game-over');
        gameOverDiv.textContent = `${this.winner} won the game!`;
        document.body.appendChild(gameOverDiv);
    }
}

// as per example above we can see that objects 2 responsibilities , which is 1. checking 
// for game state (over or not) and 2. creating DOM (insetead of calling it from outside):

function isGameOver1() {

    if (gameOver) {
        DOMconst.gameOver(this.winner);
    }
}

// Loosely coupled object 

// Concept is that objects should not be tightly coupled, which means they should be easliy
// replacable, if change is needed. 

// 1. Single responsibility Princpiple - class, object or module should only have one responsibility.
// Object can do not only thing, but all what it does shoud be part of one responsibility.

// 2. Open-closed principle says - code should be open for extension , but closed for modification,
// meaning that if we want to add additional functionality. we should be able to simply extend, without
// excessive modify.

// 3. Liskov substitution states - any class should be substitutable for its parent 
// class without unexpected consequences, meaning that every extending class should be able to 
// take all functionallity from class it extends from.

// 4. Interface segregtion principle states - an entity should never be forced to implement 
// an interface which contains elements which it will never use. E.g:
// Chicken, Eagle and fly(). Eagle can fly(), so fly can be assigned to Eagle, but Chicken cant fly,
// so it cannnot implement fly().

// 5. 
