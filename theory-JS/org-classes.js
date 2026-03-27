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

// constructor() method is called automtically by bobject can be initialized there:
