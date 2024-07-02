
let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// [1] find smallest number in all variables and return integer
console.log( Math.round( Math.min(a, b, c, d) ) );
console.log( Math.floor( Math.min(a, b, c, d) ) );
console.log( Math.trunc( Math.min(a, b, c, d) ) );
console.log( parseInt( Math.min(a, b, c, d) ) );
                                                    // =>> return integer only
                                                    // =>> trim floating point number


console.log("\n");

// [2] use [a, d variables] one time to get the needed output   =>> 10000
// [a] using exponentiation
console.log( a ** Math.round(d) );              // [1] exponentiation
console.log( a ** Math.floor(d) );              // [2] exponentiation
console.log( a ** Math.trunc(d) );              // [3] exponentiation
console.log( a ** parseInt(d) );                // [4] exponentiation

console.log("\n");

// [b] using [Math.pow()]
console.log( Math.pow( a, parseInt(d) ) );      // [1] pow
console.log( Math.pow( a, Math.round(d) ) );    // [2] pow
console.log( Math.pow( a, Math.floor(d) ) );    // [3] pow
console.log( Math.pow( a, Math.trunc(d) ) );    // [4] pow

console.log("\n");

// [3] get integer 2 from d variable with 4 methods
console.log( Math.round(d) );
console.log( Math.floor(d) );
console.log( Math.trunc(d) );
console.log( parseInt(d) );

console.log("\n");

// [4] use [b, d variables] to get these values: [66.67 string] [67 string]
// [b = 2_00.5]  [d = 2.4]
console.log( ( Math.floor(b) / Math.ceil(d) ).toString() );     // string [66.67]
console.log( ( Math.trunc(b) / Math.ceil(d) ).toString() );     // string [66.67]
console.log( ( parseInt(b) / Math.ceil(d) ).toString() );       // string [66.67]

console.log("\n");

console.log( Math.round( parseInt(b) / Math.ceil(d) ) );    // number [67]
console.log( Math.ceil( Math.floor(b) / Math.ceil(d) ) );   // number [67]
console.log( Math.ceil( Math.trunc(b) / Math.ceil(d) ) );   // number [67]


