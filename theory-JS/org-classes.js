// JS.info 

// Getters and setters 

// Accessor properties are represented by getter (get) and setter (set):

let obj = {
    get propertyName() {
        // getter, the code executed on getting obj.propertyName
    },

    set propertyName(value) {
        // setter, the code executed on setting obj.propertyName = value
    }
}

// Example :

let user = {
    name: "Bella",
    surname: "Ramsey",

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }
};

user.fullName = "Denis WannaBeDominatrix"; // no reaction if setter is not provided

console.log(user.fullName); // Bella Ramsey, prior to setting user to Denis (line:32)
console.log(user.name); // Denis
console.log(user.surname); // WannaBeDominatrix


// !!! used for general needs and more common in "real world" scenario


// Accessor descriptors 

// AD doesnt have value or writable, they may have:

// get – a function without arguments, that works when a property is read,
// set – a function with one argument, that is called when the property is set,
// enumerable – same as for data properties,
// configurable – same as for data properties.


// Example :


Object.defineProperty(user, 'fullName', {
    get() {
        return `${this.name} ${this.surname}`;
    },

    set(value) {
        [this.name, this.surname] = value.split(" ");
    }
});

console.log(user.fullName); // Denis WannaBeDominatrix


// !!! used primarly for existing objects. example of usage in existing code:

// old code used age 

function User(name, age) {
    this.name = name;
    this.age = age;
}

let john = new User("John", 875);

console.log(john.age); // 875


// but what if we want to add or change age for something like birthday, without breaking 
// existing code and user's base?! Solvable by adding get (defineProperty):

function UserUpdated(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    Object.defineProperty(this, "age", {
        get() {
            let currentYear = new Date().getFullYear();
            return currentYear - this.birthday.getFullYear();
        }
    })
}


let denis = new UserUpdated("Denis", new Date(1990, 9, 1));

console.log(denis.birthday);
console.log(denis.age);




// Class 

// the basic syntax is:

class MyClass {
    constructor() {}
    method1() {}
    method2() {}
    method3() {}
    //...
}

// constructor() method is called automtically by bobject can be initialized there.

class User1 {
    constructor(name) {
        this.name = name;
    }

    sayHI() {
        console.log(this.name);
    }
}

let user1 = new User1 ("Potter"); // creates new object with name Potter and assign this.name to it
user1.sayHI();  // Potter


// in JS. a class is a kind of function:

class User2 {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(this.name);
        
    }
}

console.log(typeof User2); // function


// Three main differences between class and constructor function :

// 1. class is labeled by a special internal property [[IsClassConstructor]]: true
// 2. class methods are "enumerable". class definition sets enumerable: false for all methods in prot.
// 3. classes always "use strict"



// Class expression 

// classes can behave the way function do, being one themselvev, so they can be defined inside 
// another expression, passed around, returned, assigned, etc. Example of class expression:

let User3 = class {
    sayHi() {
        console.log("Hello");
    }
}

new User3().sayHi(); // Hello

// dynamic way :

function makeClass(phrase) {
    return class {
        sayHi() {
            console.log(phrase);
        }
    }
}

let User4 = makeClass("Peppa pig");

new User4().sayHi();



// Getters/Setters

// just like objects, classes may include getters/setters, computed properties, etc.

class User5 {
    constructor(name){
        this.name = name;
    }

    get name () {
        return this._name; 
    }

    set name (value) {
        if (value.length < 2) {
            console.log("Value is too short");
            return; 
        }
        this._name = value;
    }
}

let user5 = new User5 ("Willy - Dilly");
console.log(user5.name); // Willy - Dilly
// checking validation
user5 = new User5 ("A"); // ....too short




// Computed names 

// example of computed name using brackets [...] :

class User6 {
    ['call' + 'Me']() {
        console.log("Call me any time");
    }
}

new User6().callMe();  // Call me any time



// Class fields 

// "class fields" is a syntax that allows to add any properties:

class User7 {
    name = "Cutie";

    sayHi() {
        console.log(`Hello, ${this.name}!`);
    }
}

new User7().sayHi();

// so we just use '=' to declare and thats it. important difference is that they are set on 
// individual objects, not User.prototype:

class User8 {
    name = "Patootie";
}

let user8 = new User8();
console.log(user8.name); // Patootie
console.log(User8.prototype.user); // undefined
console.log(Object.getOwnPropertyNames(User8.prototype)); // [constructor], exists but empty 
// without methods

