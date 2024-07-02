/*
    [1] double precision                     الدقه المزدوجه
        =>> integer, floating point number and complex number are stored by the same way in js
    [2] syntactic sugar  =>> related to cs   التجميل اللغوي
    [3] BIG INT

    * number:
        [1] ordinal number
        [2] underscore   [it's skipped]
        [3] e
        [4] exponentiation
        [5] decimal
        [6] Number()    =>> constructor in OOP

    * Number + BIG INT   =>> JS use integer exceed limit used in the past
    
*/


console.log(1000000);               // [1] ordinal number
// = 
console.log(1_000_000);             // [2] underscore
// = 
console.log(1e6);                   // [3] e
// = 
console.log(10 ** 6);               // [4] exponentition
// = 
console.log(1000000.00);            // [5] decimal
console.log(1000000.01);            // [5] deciaml
// = 
console.log( Number("1000000") );   // [6] constructor in OOP   =>> string to number
console.log( Number("1_000_000") ); // [6] result = [NaN]       =>> Not a Number



console.log(Number.MAX_SAFE_INTEGER);       // max safe integer in JS
console.log(Number.MIN_VALUE);              // min integer in JS
console.log(Number.MAX_VALUE);              // max integer in JS
console.log(Number.MAX_VALUE + 2_000_000);  // result = max integer in JS


