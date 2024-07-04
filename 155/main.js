/*
    * OOP: [prototype object]:
        =>> mechanism by which javascript objects inherit features from another object
*/

class User {
    constructor(id, userName){
        this.i = id;
        this.u = userName;
    };
    sayHello(){                             // [this], [u]  =>> sensitive to upper and lower cases
        return `Hello [${this.u}]`;         // [this]  =>> refers to [object] i create from [this function] [constructor function] [User class]
    };                                      // can't use [User]  =>> [static] not found
};                                          // [outside constructor] [inside class] the only way

let user1 = new User(25, "Ahmed Koresh");

console.log(user1.i);
console.log(user1.u);
console.log( user1.sayHello() );
console.log(User.prototype);                // result = [prototype object]
console.log(`${"#".repeat(30)}\n\n`);

let string1 = "Elzero";
console.log(String.prototype);              // result = prototype object
console.log(string1.length);
