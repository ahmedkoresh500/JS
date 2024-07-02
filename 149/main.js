/*
    * OOP: [constructor function]  =>> new syntax  =>> [ES6]:
*/


/*
function User(id, userName, salary){        // first letter uppercase =>> best practice
    this.i = id;                            // [this] refers to object i created from this function
    this.u = userName;
    this.s = salary;
};
*/


// [constructor function]  =>> new syntax  =>> [ES6]:
class User {                                // first letter uppercase =>> best practice
    constructor(id, userName, salary) {
        this.i = id;                        // [this] refers to object i created from this function
        this.u = userName;
        this.s = salary;
    };
};

let userOne = new User(33, "Ahmed", 3000);      // [userOne]    // =>> object
                                                                // =>> instance of the class
                                                                // =>> instance of constructor function

console.log(userOne.i);
console.log(userOne.u);
console.log(userOne.s);
console.log(`${"#".repeat(30)}\n\n`);

console.log(userOne instanceof User);           // result = true
console.log(userOne.constructor === User);      // result = true
console.log(userOne.constructor);               // result = native code     =>> two are the same
console.log(User);                              // result = native code     =>> two are the same



////////////////////////////////////////////////////////////////////
// revision:


