/*
    * Nested Object:
*/

let User = {                            // object
    Name: "Ahmed",
    Age: 23,
    Skills: ['HTML', 'CSS', 'JS'],      // array
    Available: false,
    Addresses:{                         // Nested Object 1
        Ksa: "Riyadh",
        Egypt:{                         // Nested Object 1 1
            Address1: "Cairo",
            Address2: "Giza",
        },                              // colon after nested object
    },
    CheckAv: function(){                // [methods = functions = actions] inside object
        if(User.Available === true){    // [Available] = syntax error  =>> [User.Available] =>> object not function =>> although same level
            return `available for work`;    // return only
            console.log("hello world");     // result = ["hello" + undefined]   =>> no print in console
        }else{
            return `not available for work`;
        }
    }
};                                      // semicolon after main object

console.log( User.Name );
console.log( User.Age );
console.log( User.Skills.join(" | ") ); // can access [methods, functions, actions] of array  =>> like [join();]
console.log( User.Skills );
console.log( User.Skills[2] );          // access with index

console.log( "\n" );

console.log( User.Addresses );
console.log( User.Addresses.Ksa );
console.log( User.Addresses.Egypt );

console.log("\n");

console.log( User.Ksa );              // result = undefined     =>> indirect property Name =>> nested object
console.log( User.Egypt );            // result = undefined     =>> indirect property Name =>> nested object

console.log( "\n" );

console.log( User.Addresses.Egypt.Address1 );
console.log( User["Addresses"].Egypt.Address1 );            // [dot notation] with [bracket notation]
console.log( User["Addresses"]["Egypt"].Address2 );         // [dot notation] with [bracket notation]
console.log( User.Addresses["Egypt"]["Address2"] );

console.log( "\n" );

console.log( User.CheckAv() );      // must call methods with parentheses

