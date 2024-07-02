/*
    * OOP: [constructor function]:

    * [constructor function] like [ordinal function]
*/


// EX:
function User(id, userName, salary){            // first letter uppercase =>> best practice
    this.i = id;                                // [this] refers to object i created from [this function] [constructor function] [User class]
    this.userName = userName;
    this.salary = salary + 1000;
};

let userOne = new User(22, "Ahmed", 2000);
let userTwo = new User(33, "Elzero", 3000);
let userThree = new User(44, "Hassan", 4000);

console.log(userOne.i);
console.log(userOne.id);            // result = undefined
console.log(userTwo.userName);
console.log(userThree.salary);


// above code instead of below three objects
const user1 = {
    id: 100,
    userName: "Elzero",
    salary: 5000,
};

const user2 = {
    id: 101,
    userName: "Hassan",
    salary: 6000,
};

const user3 = {
    id: 102,
    userName: "Sayed",
    salary: 7000,
};
console.log(`${"#".repeat(30)}\n\n`);


/*
//  * two constructors same name  =>> last constructor only work

function User(id, userName, salary){
    this.i1 = id;
    this.u1 = userName;
    this.s1 = salary;
};

let user5 = new User(55, "Ahmed", 5000);
console.log(user5.i1);
console.log(user5.id);              // result = undefined
console.log(user5.s1);
*/


