/*
    * number methods:
        =>> two dots to call a method

        1- toString()       =>> number to string
                                                    =>> [S] of [String] must be uppercase

        2- toFixed()        =>> number to string
                            =>> how many numbers needed after floating point
                                                    =>> [F] of [Fixed] must be uppercase

        3- parseInt()       =>> string to number [integer]
                                                    =>> [I] of [Int] must be uppercase

        4- parseFloat()     =>> string to number [floating point number]
                                                    =>> [F] of [Float] must be uppercase

        5- Number.isInteger()   =>> ES6
                                                    =>> [I] of [Integer] must be uppercase

        6- Number.isNaN()       =>> ES6
                                                    =>> [NaN] must be uppercase

    * parse = analysis
*/


// [1]
console.log ( (101). toString () );
console.log ( 102.. toString() );   // [double dots] =>> explain integer not floating point number
console.log ( 103.00.toString() );
console.log ( 104.10.toString() );
console.log( 104.05.toString() );


console.log("\n");


// [2]
console.log( 100.. toFixed () );            // result = no floating point number
console.log( 100.5567. toFixed () );        // result = no floating point number    =>> near to the right number

console.log( 100..toFixed(2) );
console.log( 100.0567. toFixed (2) );
console.log( 100.55455.toFixed(2) );        // result =>> [100.55] not [100.56]



console.log("\n");


// [3]
console.log( +"100" );                      // result = integer     =>> [unary plus operator] =>> [unary negation operator]
console.log( Number("100") );               // result = integer     =>> constructor in OOP

console.log( +"100 osama" );                // result =>> [NaN]
console.log( Number("100 osama") );         // result =>> [NaN]
console.log( parseInt("100 osama") );       // result =>> [Integer]
console.log( parseInt("osama 100 osama") ); // result =>> [NaN]



console.log("\n");


// [4]
console.log( parseInt("106.567Esama") );        // result = integer(106)     =>> not floating point number
console.log( parseInt("Ahmed") );               // result = NaN
console.log( typeof parseInt("Ahmed") );        // result = typeof number
// =>> two are equal
console.log( typeof NaN );                      // result = typeof number
console.log( parseFloat("100.567Esama") );      // result = floating point number


console.log( "\n" );


// [5]
console.log( Number.isInteger("100") );         // result   =>> false
console.log( Number.isInteger(100.500) );       // result   =>> false
console.log( Number.isInteger(100) );           // result   =>> true
console.log( Number.isInteger(NaN) );           // result   =>> false


console.log("\n");


// [6]
console.log( Number.isNaN("osama") );           // [false]  =>> is not a number
console.log( Number.isNaN("osama" / 20) );      // [true]   =>> a number


console.log("\n");


// [7]
console.log( isNaN("100 osama 100") );          // [true]   =>> is not a number
console.log( isNaN("100 osama") );              // [true]   =>> is not a number
console.log( isNaN("osama 100") );              // [true]   =>> is not a number
console.log( isNaN("100") );                    // [false]  =>> a number
console.log( isNaN(100) );                      // [false]  =>> a number

console.log("\n");

// from lesson 23
console.log( Number.MAX_SAFE_INTEGER );         // max safe integer in js
console.log( Number.MAX_VALUE );                // max integer in js
console.log( Number.MIN_VALUE );                // min integer in js

console.log( Number.MAX_VALUE + 200);           // max integer in js 


