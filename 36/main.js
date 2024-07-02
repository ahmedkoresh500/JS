/*
    1-  logical   =>> [||]
                            =>> with [undefined] [null] [ falsy value [0] or [""] ]


    2-  Nullish coalescing operator [??]   
                            =>> with [undefined] [null]

    * [true] [false] [null]  =>> must be written lowercase
*/

let Price;

// [1] logical =>> [ || ]
console.log(Price);         // [1] value = no value     =>> undefined
console.log( `the price is ${Price || 200}` );

console.log( "\n" );

Price = null;               // [2] value = null
console.log(Price);
console.log( `the price is ${Price || 200}` );

console.log( "\n" );

Price = 0;                  // [3] value = 0
console.log( Price );
console.log( `the price is ${Price || 200}` );
console.log( "\n" );

Price = "";                 // [4] value = ""   =>> empty
console.log( Price );
console.log( `the price is ${Price || 200}` );



console.log( "\n" );


// Normal example
Price = 100;                // [5] result = 100
console.log( Price );
console.log( `the price is ${Price || 200}` );



console.log( "\n" );



// [2] Nullish coalescing Operator =>> [ ?? ]
let Pric;                           // [1] value = no value     =>> undefined
console.log( Pric );
console.log( `the price is ${Pric ?? 200}` );

console.log( "\n" );

Pric = null;                        // [2] value = null
console.log( Pric );
console.log( `the price is ${Pric ?? 200}` );

console.log( "\n" );

Pric = 0;                           // [3] value = 0
console.log( Pric );
console.log( `the price is ${Pric ?? 200}` );

console.log( "\n" );

Pric = "";                          // [4] value = ""   =>> empty
console.log( Pric );
console.log( `the price is ${Pric ?? 200}` );

console.log( "\n" );


// [Boolean(value)] =>> constructor in OOP
// has value        =>> true
// has no alue      =>> false
console.log( Boolean(100) );        // result = true
console.log( Boolean(-100) );       // result = true

console.log( Boolean() );           // result = false
console.log( Boolean(null) );       // result = false

console.log( Boolean(0) );          // result = false
console.log( Boolean("") );         // result = false
