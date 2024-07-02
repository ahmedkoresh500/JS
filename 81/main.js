/*
    * Nested Object:
*/

let User = {                            // main object
    Name: "Ahmed",                      // [1] string
    Age: 23,                            // [2] number
    Available: false,                   // [3] boolean

    Skills: ['HTML', 'CSS', 'JS'],      // [4] array
    CheckAv: function(){                // [5] function
        if(User.Available === true){    // [Available] = syntax error  =>> [User.Available] =>> although same level
            return `available for work`;    // return only
            console.log("hello world");     // result = ["hello" + undefined]   =>> no print in console
        }else{
            return `not available for work`;
        }
    },

    Addresses:{                         // [6] Nested Object
        Ksa: "Riyadh",
        Egypt:{
            Address1: "Cairo",
            Address2: "Giza",
        },                              // [**]  [,] after [nested object]
    }
};                                      // [**]  [;] after [main object]

console.log( User.Name );
console.log( User.Age );
console.log( User.Skills );
console.log( User.Skills[2] );          // access with index
console.log( User.Skills.join(" | ") ); // access with [array functions]  =>> like [join()]

console.log("\n");

console.log( User.Addresses );
console.log( User.Addresses.Ksa );
console.log( User.Addresses.Egypt );

console.log("\n");

console.log( User.Ksa );        // [result = undefined]   =>> indirect access  =>> nested object
console.log( User.Egypt );      // [result = undefined]   =>> indirect access  =>> nested object

console.log("\n");

console.log( User.Addresses.Egypt.Address1 );
console.log( User["Addresses"].Egypt.Address1 );            // [dot notation] with [bracket notation]
console.log( User["Addresses"]["Egypt"].Address2 );         // [dot notation] with [bracket notation]
console.log( User.Addresses["Egypt"]["Address2"] );
console.log( User["Addresses"]["Egypt"]["Address2"] );

console.log("\n");

console.log( User.CheckAv() );      // must call methods with parentheses
