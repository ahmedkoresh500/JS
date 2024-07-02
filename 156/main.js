/*
    * OOP: [prototype object]:
        =>> mechanism by which javascript objects inherit features from another object
        [1] add to prototype chain
        [2] extend built-in constructors' features

    * class  =>> [function] [constructor function]
    * any [function] created  =>> it's prototype created
    * any [class] created     =>> it's prototype created
*/

class User {
    constructor(id, userName){
        this.i = id;
        this.u = userName;
    };
    sayHello(){                             // [this], [u]  =>> sensitive to upper and lower cases    
        return `Hello [${this.u}]`;         // [this] refers to object i created from [this function] [constructor function] [User class]
    };                                      // can't use [User]  =>> [static] not found
};
let user1 = new User(101, "Ahmed");

console.log(user1.i);
console.log(user1.u);
console.log( user1.sayHello() );
console.log(`${"#".repeat(30)}\n\n`);





// [1] add to prototype chain
User.prototype.sayWelcome = function(){
    return `welcome [${this.u}]`;               // [this] refers to object i created from [this function] [constructor function] [User class]
};                                              // the only way
console.log(user1.sayWelcome());
console.log(User.prototype);                    // result = prototype object
console.log(`${"#".repeat(30)}\n\n`);



// [2] extend built-in constructors' features
Object.prototype.Instructor = "Elzero web school";
console.log(user1.Instructor);
console.log(`${"#".repeat(30)}\n\n`);



// another EX:
String.prototype.addBracketBeforeAndAfter = function(){
    return `[${this}]`;                                 // [this]  =>> refers to string value
};
let string1 = "Elzero";
console.log( string1.addBracketBeforeAndAfter() );      // [1] result = [Elzero]


String.prototype.addBracketBeforeAndAfter = function(value){
    return `[${value}]`;
};
console.log(string1.addBracketBeforeAndAfter("Ahmed Koresh"));  
                                                        // [2] result = [Ahmed koresh]
console.log(string1.addBracketBeforeAndAfter(string1));
                                                        // [3] result = [Elzero]


