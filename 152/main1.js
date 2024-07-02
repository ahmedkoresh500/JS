/*
    * OOP: class: static methods and properties:
*/

/*
function User(id, userName, salary){
    this.i = id;
    this.u = userName;
    this.s = salary;
};
*/

class User {
    static count = 0;                           // static   =>> related to class [User class]
    number1 = 10;                               // dynamic  =>> [in every object]
    static number2 = 20;                        // static   =>> related to class [User class]

    constructor(id, userName, salary){
        this.i = id;
        this.u = userName;
        this.s = salary;
        // this.n = number1;                    // = syntax error
        this.n = this.number1;                  // [1] [this] refers to [object] i created from this function [constructor function] [User class]
        this.th = this;                         // [this] refers to [object] i created from this function [constructor function] [User class]
        // this.count++;                        // [this] refers to object  =>> doesn't work
        User.count++;
    };

    // [2] static methods
    static countMembers(){                          // no [function] keyword
        // return this;                             // [2] [this] refers to parent  =>> [User class]
        // return `${User.count} members created`;  // [count] without [static] = dynamic =>> [result = undefined] when calling
        return `${this.count} members created`;     // [count] without [static] = dynamic =>> [result = undefined] when calling
    };
};

let user1 = new User(100, "Koresh", 5000);
let user2 = new User(101, "Elzero", 6000);

console.log(user1.u);
console.log(user2.u);

console.log(user1.n);
console.log(user2.n);

console.log(user1.th);
console.log(user2.th);
console.log(`${"#".repeat(30)}\n\n`);



// number1  =>> [dynamic]
console.log(user1.number1);   // result = 10            =>> dynamic  =>> [object] can access
console.log(User.number1);    // result = undefined     =>> dynamic  =>> [class] can't access
console.log(`${"#".repeat(30)}\n\n`);

// number2  =>> [static]
console.log(user1.number2);   // result = undefined     =>> static  =>> [object] can't access
console.log(User.number2);    // result = 20            =>> static  =>> [class] can access
console.log(`${"#".repeat(30)}\n\n`);



// console.log( user1.countMembers() );         // result = syntax error
console.log( User.countMembers() );
console.log(`${"#".repeat(30)}\n\n`);




///////////////////////////////////////////////////////////////////////////////////
/*
// revision
class User5 {
    static count = 0;
    constructor(id, userName, salary){
        this.i = id;
        this.u = userName;
        this.s = salary;
        User5.count++;
    };
    static members(){
        return `${this.count} members created`;     // [this] refers to parent  =>> [User5 class]
        return `${User5.count} members created`;
    };
};

let user12 = new User5(100, "Ahmed", 2000);
let user13 = new User5(100, "Ahmed", 2000);
let user14 = new User5(100, "Ahmed", 2000);
let user15 = new User5(100, "Ahmed", 2000);

console.log( User5.members() );
*/

