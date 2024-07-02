/*
    * object:
        =>> [Dot Notation] vs [Bracket Notation]
        =>> [dynamic property name]

    [1] [valid string] as property name
        =>> [dot notation] can access only [valid string] as property name
        =>> without ["]  =>> is a must

    [2] [dynamic property name]
            =>> [dot notation] can't access [dynamic property name]
            =>> [bracket notation] can access [dynamic property name]  =>> without ["]  =>> is a must
            =>> [bracket notation] can access [property name]  =>> with ["]             =>> is a must

    *  [dynamic property name]  =>> [variable value] = [object property]
*/

let MyAge = "Age";

let User = {
    Name: "Ahmed",
    "Age": 38,
    "Country of": "Egypt",
    100: "it's a number"
};

// [1] [dot notation]
console.log( User.Name );
console.log( User.Age );                // [dot notation] can access only [valid string] as property name
                                        // without ["] =>> is a must
// [1] [dot notation]
// console.log( User."Country of" );    // = syntax error   =>> not [valid string]
// console.log( User.100 );             // = syntax error   =>> not [valid string]
// console.log( User."100" );           // = syntax error   =>> not [valid string]

console.log("\n");

// [2] [bracket notation]
console.log( User["Name"] );        // [bracket notation] can access [property name] => with ["] => is a must
//console.log( User[Age] );         // = syntax error
console.log( User["Age"] );         // [bracket notation] can access [property name] => with ["] => is a must
console.log( User["Country of"] );  // [bracket notation] can access [property name] => with ["] => is a must
console.log( User[100] );           // number   =>> with ["] or not
console.log( User["100"] );         // number   =>> with ["] or not

console.log("\n");

// dynamic property name
console.log( User.MyAge );      // result = undefined   =>> [dot notation] can't access [dynamic property name]
console.log( User[MyAge] );     // result = 38          =>> [bracket notation] can access [dynamic property name]  => without ["]  =>> is a must
console.log( User["MyAge"] );   // result = undefined   =>> [bracket notation] can access [dynamic property name]  => without ["]  =>> is a must

/*
    * property name             =>> error = syntax error
    * dynamic property name     =>> error = undefined
*/