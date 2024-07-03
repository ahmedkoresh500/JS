/*
    * OOP: [update properties] and [built-in constructors]:

*/

class User {
    constructor(id, userName, salary){
        this.i = id;
        this.u = userName;
        this.s = salary;
    };
    updateName(newName){
        this.u = newName;
    };
};

let userOne = new User(33, "Ahmed", 6000);
console.log(userOne.u);

// [1] update properties and built-in constructors
userOne.updateName("Koresh");
console.log(userOne.u);
console.log(`${"#".repeat(30)}\n\n`);


// [2] update properties and built-in constructors
let string1 = "Elzero";
let string2 = new String("Elzero");
console.log(typeof string1);                    // result = string
console.log(typeof string2);                    // result = object
console.log(`${"#".repeat(30)}\n\n`);

console.log(string1 instanceof String);         // result = false
console.log(string2 instanceof String);         // result = true
console.log(`${"#".repeat(30)}\n\n`);

console.log(string1.constructor === String);    // result = true    =>> built using String constructor
console.log(string2.constructor === String);    // result = true    =>> built using string constructor
console.log(`${"#".repeat(30)}\n\n`);

console.log(string1.constructor);               // result = native code     =>> three are the same
console.log(string2.constructor);               // result = native code     =>> three are the same
console.log(String);                            // result = native code     =>> three are the same

