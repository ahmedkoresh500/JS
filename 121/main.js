/*
    * destructuring:
        =>> extracting data from [array] [object] [map] into variables

    [1] destructuring arrays:        =>> let [] = array;
            * [let]  =>> if variables weren't declared.

    [2] destructuring objects:       =>> let {} = object;
            * [let]  =>> if variables weren't declared.

    [3] destructuring functions:
*/

const User = {
    Age: 24,
    Name: "Ahmed",
    Skills: ["HTML", "CSS", "JS"],
    Addresses:{
        Egypt: "Cairo",
        KSA: "Riyadh",
    },
};

// [1] changing variables default name
// [2] adding new variables
// [3] destructuring nested object

// arrangement doesn't matter in [object] like [array]
const {Name: n, Age: a, Skills: [one, , three], Addresses:{Egypt: E}} = User;   // rules: lesson [118]

// console.log(Name);       // result = syntax error
console.log(n);             // result = Ahmed

// console.log(Age);        // result = syntax error
console.log(a);             // result = 24

// console.log(Skills);     // result = syntax error
console.log(one);           // result = HTML
console.log(three);         // result = JS

// console.log(Egypt);      // result = syntax error
console.log(E);             // result = Cairo


