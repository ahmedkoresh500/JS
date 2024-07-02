/*
    * OOP: class inheritance:
*/


/*
// [constructor function] like [ordinal function]

function User(id, userName, email){         // first letter uppercase   =>> best practice
    this.i = id;
    this.u = userName;
    this.e = email;
};
*/

// parent class
class User {
    constructor(id, userName, email){
        this.i = id;
        this.u = userName;  // [this] refers to object i created from this function [constructor function] [user class]
        this.e = email;     // [this] refers to object i created from this function [constructor function] [user class]
    };
    sayHello(){                     // no function keyword
        return `Hello [${this.u}]`; // [Lesson 150] =>> outside constructor inside class =>> the only way
    };                              // [this] refers to object i created from this function [constructor function] [User class]
};

let user1 = new User(100, "Koresh", 6000);
console.log( user1.sayHello() );
console.log(`${"#".repeat(20)}\n\n`);



// derived class
class Admin extends User {
    constructor(id, userName, permission){
        super(id, userName);                // [1] [properties]  =>> must be written to be inherited
        this.p = permission;
    };
};

let admin1 = new Admin(77, "Elzero");
console.log(admin1.id);                     // result = undefined
console.log(admin1.userName);               // result = undefined

console.log(admin1.i);                      // [i] not [id]
console.log(admin1.u);                      // [u] not userName

console.log(admin1.e);                      // result = undefined
console.log(admin1.email);                  // result = undefined

console.log(admin1.p);                      // result = undefined
console.log(`${"#".repeat(20)}\n\n`);

let admin2 = new Admin(88, "Osama", 1);
console.log(admin2.i);
console.log(admin2.u);
console.log(admin2.p);
console.log( admin2.sayHello() );           // [2] [methods]  =>> mustn't be written to be inherited
console.log(`${"#".repeat(20)}\n\n`);


// derived class
class SuperAdmin extends Admin {                        // [properties] must be same name in [parent constructor]
    constructor(id, userName, permission, ability){     // [arrangement] is very important
        super(id, userName, permission);                // [arrangement] is very important
        this.a = ability;
    };
};

let superadmin1 = new SuperAdmin(22, "Ahmed", true, "Good");
console.log(superadmin1.i);
console.log(superadmin1.u);
console.log(superadmin1.p);
console.log(superadmin1.a);
console.log(superadmin1.sayHello());        // [2] [methods]  =>> mustn't be written to be inherited

/*
    * can't inherit [email] property in [SuperAdmin] from [User] directly  ???????????
*/


