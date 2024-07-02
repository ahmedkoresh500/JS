/*
    * console.log( 100.4567.toFixed() );        =>> equal in this case only     =>> number to string
                                                                                =>> how many numbers needed after floating point
    * console.log( Math.round(100.4567) );      =>> equal in this case only


    * Math object:
        [1] Math.round()     =>> to the right number
        [2] Math.ceil()
        [3] Math.floor()

        [4] Math.min()
        [5] Math.max()

        [6] Math.pow()

        [7] Math.random()

        [8] Math.trunc()     // ES6

    * [M] of [Math] must be uppercase
*/



// [1]
let a = 99.45;
console.log( Math.round(a) );       // result = 99      =>> to the right number
console.log( Math.round(99.5) );    // result = 100     =>> to the right number
console.log( a.toFixed() );                             //  to the right number
console.log( "\n" );

// [2]
console.log( Math.ceil(99.2) );     // result = 100     =>> [ceil]
console.log( Math.ceil(99.5) );     // result = 100     =>> [ceil]
console.log("\n");

// [3]
console.log( Math.floor(99.2) );    // result = 99      =>> [floor]
console.log( Math.floor(99.5) );    // result = 99      =>> [floor]
console.log("\n");



// [4]
console.log( Math.min(70, 50, 30, 180, 600, -10, -50, 110) );   // result [min] = -50
console.log( Math.max(70, 50, 30, 180, 600, -10, -50, 110) );   // result [max] = 600

console.log("\n");

// [5]
console.log(2 ** 4);                // two are equal    [exponentiation]
console.log( Math.pow(2, 4) );      // two are equal    [Math.pow()]
console.log("\n");

// [6]
console.log( Math.random() );       // result = random number
console.log( "\n" );

// [7]
console.log( Math.trunc() );        // result = [NaN]

// three are equal
console.log( Math.trunc(100.8) );
console.log( Math.floor(100.8) );
console.log( parseInt(100.8) );
console.log( parseInt("100.8") );
                                    // return integer only
                                    // trim floating point number

