/*
    * Object.create({});  =>> to create object

        =>> [Object]        =>> constructor in OOP
        =>> [create();]     =>> method

    * add methods and properties
*/

// normal object
let User = {
    Name: "Ahmed",
    Age: 23,
    DoubleAge: function(){          // anonymous function  =>> function without functionName
        return User.Age * 2;        // [Age]  =>> syntax error      =>> [User.Age]
    },
};

console.log( User );
console.log( User.Age );
console.log( User.DoubleAge() );    // must call methods with parentheses
console.log( "\n" );


// [Object] constructor  =>> [create();] method
let obj = Object.create({});
console.log( obj );             // empty object
obj.a = 100;                    // add properties
console.log( obj.a );
console.log( "\n" );


// [Object.create({});]   =>> accept another object as a prototype
// new object dependent on old object
// [NewUser]  dependent on [User]
let NewUser = Object.create(User);
console.log( NewUser.Age );     // Age = 23
NewUser.Age = 30;
console.log( NewUser.Age );     // Age = 30

console.log( NewUser );
console.log( NewUser.DoubleAge() ); // inside [DoubleAge();] method     =>> line 12
                                    // [User.Age * 2] = [23 * 2] = 46
                                    // if [this.Age * 2] = [30 * 2] = 60