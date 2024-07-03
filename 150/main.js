/*
    * OOP: deal with [properties and methods]:

    * union operator:
        =>> [||] or

    * intersection operator:
        =>> [&&] and
*/

class User {
    constructor(id, userName, salary){
        // properties
        this.i = id;                    // [this] refers to object i create from [this function] [constructor function] [User class]
        this.u = userName || "[unknown]";
        this.s = salary >= 7000 ? salary + 1000 : salary >= 6000 ? salary + 500 : salary;
                                        // conditional ternary operator
        this.msg1 = function(){
            return `Hello ${userName} your salary is ${this.s}`;    // [this.s] to get salary with bonus
        };
    };

    // method
    msg2(){                                                 // no function keyword
        return `Hello ${this.u} your salary is ${this.s}`;  // [this.u]   =>> [outside constructor] [inside class]  =>> the only way
    };                                                      // [userName] =>> result = syntax error
};

userOne = new User(25, "Ahmed", 5000);
console.log(userOne.i);
console.log(userOne.u);
console.log(userOne.s);
console.log( userOne.msg1() );      // property
console.log( userOne.msg2() );      // method
console.log(`${"#".repeat(20)}\n\n`);

userTwo = new User(26, "", 6000);
console.log(userTwo.i);
console.log(userTwo.u);                 // result = [unknown]
console.log(userTwo.s);
console.log(userTwo.msg1);              // result = native code  =>> without name
console.log(userTwo.msg2);              // result = native code  =>> with name
console.log(`${"#".repeat(30)}\n\n`);
