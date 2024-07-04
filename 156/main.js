/*
    * OOP: [prototype object]:
        =>> mechanism by which javascript objects inherit features from another object
        [1] add to prototype chain
        [2] extend built-in constructors' features

    * [function] [constructor function] [class] [User class]
    * any [function] created  =>> special prototype created
    * any [class] created     =>> special prototype created
*/

class User {
    constructor(id, userName){
        this.i = id;
        this.u = userName;
    };
    sayHello(){                         // [this], [u]  =>> sensitive to upper and lower cases    
        return `Hello [${this.u}]`;     // [this] => refers to [object] i create from [this function] [constructor function] [User class]
    };                                  // can't use [User]  =>> [static] not found
};                                      // [outside constructor] [inside class] the only way

let user1 = new User(25, "Ahmed");

console.log(user1.i);
console.log(user1.u);
console.log( user1.sayHello() );
console.log(`${"#".repeat(30)}\n\n`);


// [1] add to prototype chain
User.prototype.sayWelcome = function(){
    return `welcome [${this.u}]`;       // [this] => refers to [object] i create from [this function] [constructor function] [User class]
};                                      // the only way
console.log( user1.sayWelcome() );
console.log(User.prototype);            // result = [prototype object]
console.log(`${"#".repeat(30)}\n\n`);



// [2] extend built-in constructors' features
Object.prototype.instructor = "Elzero web school";
console.log(user1.instructor);
console.log(`${"#".repeat(30)}\n\n`);

// [2] extend built-in constructors' features [EX]:
String.prototype.addBrackets = function(){
    console.log(this);    // [this]  =>> refers to [object] i create from [this function] [constructor function] [String class]
    return `[${this}]`;   // [this]  =>> refers to [string value]
};

let string1 = "Elzero";
console.log( string1.addBrackets() );       // [1] result = [Elzero]

String.prototype.addBrackets = function(value){
    return `[${value}]`;
};

console.log(string1.addBrackets("Ahmed Koresh"));      // [2] result = [Ahmed koresh]
console.log(string1.addBrackets(string1));             // [3] result = [Elzero]
