/*
    * object:
        1- dig deeper
        2- Dot Notation vs Bracket Notation
        3- dynamic property name

    [1] valid string as property name
    * [dot notation] can access only valid string as property name
            =>> without double quotation    =>> not to make syntax error

    [2] dynamic property name
            =>> [dot notation] can't access dynamic property name
            =>> [bracket notation] can access dynamic property name

    * [property name] must be in double quotation with [bracket notation]
    * [dynamic property name] mustn't be in double quotation with [bracket notation]
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
console.log( User.Age );                // [dot notation] can access only valid string as property name
                                        //   without double quotation  =>> not to make syntax error

// console.log( User."Country of" );    // dot notation =>> syntax error
// console.log( User.100 );             // dot notation =>> syntax error
// console.log( User."100" );           // dot notation =>> syntax error

console.log( "\n" );

// [2] [bracket notation]
console.log( User["Name"] );
//console.log( User[Age] );             // syntax error
console.log( User["Age"] );             // [property name] must be in double quotation with [bracket notation]
console.log( User["Country of"] );      // [property name] must be in double quotation with bracket notation
console.log( User[100] );               // number   =>> in double quotation or not
console.log( User["100"] );             // number   =>> in double quotation or not

console.log( "\n" );

// dynamic property name
console.log( User.MyAge );      // result = undefined   =>> [dot notation] can't access [dynamic property name]
console.log( User[MyAge] );     // result = 38          =>> [bracket notation] can access [dynamic property name]
console.log( User["MyAge"] );   // result = undefined   =>> [dynamic property name] mustn't be in double quotation with [bracket notation]

/*
    * property name         =>> syntax error
    * dynamic property name =>> undefined
*/