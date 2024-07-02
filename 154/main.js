/*
    * OOP: class encapsulation:

        * class fields are public by default

        * encapsulation:
        [1] protects the data against illegal access
        [2] helps to achieve the target without revealing its complex details

        [3] reduce human errors
        [4] make the app more flexible and manageable
        [5] simplifies the app
*/

class User1 {                                   // first letter must be uppercase   =>> best practice
    constructor(id, userName, expectedSalary){
        this.i = id;
        this.u = userName;
        this.e = expectedSalary;
    };
};

let user1 = new User1(101, "Koresh", "5000");
console.log(user1.i);
console.log(user1.u);
console.log(user1.e * 0.3);
console.log(`${"#".repeat(30)}\n\n`);


let user2 = new User1(102, "Elzero", "5000 gneh");
console.log(user2.i);
console.log(user2.u);
console.log(user2.e * 0.3);           // result = NaN
console.log(`${"#".repeat(30)}\n\n`);




class User2 {
    #e;                                 // declaring private property
    constructor(id, userName, expectedSalary){
        this.i = id;
        this.u = userName;
        this.#e = expectedSalary;       // = syntax error  =>> must declare private property first
    };
    getSalary(){
        return parseInt(this.#e);
    };
};

let user3 = new User2(103, "Codezilla", "500 gneh");
console.log(user3.getSalary() * 0.3);


