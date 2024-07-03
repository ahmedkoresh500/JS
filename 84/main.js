/*
    * Object.create({});  =>> to create object

        =>> [Object] constructor in OOP
        =>> [create();]     =>> method
*/

// normal object
let User = {
    Name: "Ahmed",
    Age: 25,
    DoubleAge: function(){          // anonymous function  =>> function without functionName
        return User.Age * 2;        // 2 are the same   =>> [Age] = syntax error     =>> [User.Age]
        return this.Age *2;         // 2 are the same   =>> [Age] = syntax error     =>> [this.Age]
    },
};

console.log(User);
console.log(User.Age);
console.log( User.DoubleAge() );    // [methods] [functions]  =>> must call with parentheses
console.log("\n");


// [Object] constructor  =>> [create()] method
let obj = Object.create({});
console.log(obj);               // result = empty object
obj.a = 100;                    // add properties
console.log(obj.a);             // 2 are the same
console.log(obj["a"]);          // 2 are the same
console.log("\n");


// [Object.create({});]   =>> accept another object as [a prototype object]
// [new object] dependent on [old object]
// [newUser]  dependent on [User]
let newUser = Object.create(User);
console.log(newUser);
console.log(newUser.Age);     // Age = 25
console.log(newUser.Name);
newUser.Age = 30;
console.log(newUser.Age);     // Age = 30
console.log(newUser);
console.log( newUser.DoubleAge() ); // [DoubleAge()] method     =>> line 12
                                    // [User.Age * 2] = [25 * 2] = 50       =>> two are different
                                    // [this.Age * 2] = [30 * 2] = 60       =>> two are different
