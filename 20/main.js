/*
    * type coercion = type casting

    * coercion    =>> اكراه
    * casting     =>> يصب
*/


let a = 10;
let b = "20";
console.log(a + b);         // [1] result = 1020    =>> typeof string   =>> concatenation
console.log(+a + +b);       // [2] result = 30      =>> typeof number

console.log( "\n" );

let c = 40;
let d = "80";
let t = true;
console.log(c - d);         // [3] result = -40     =>> typeof number

console.log( "\n" );

console.log(+"");           // [4] result = 0   =>> typeof number = console.log(+null); = console.log(+false);
console.log(-"");           // [5] result = -0  =>> typeof number = console.log(-null); = console.log(-false);

console.log( "\n" );

console.log("" + 100);      // [6] result = 100     =>> typeof string
console.log("" - 100);      // [7] result = -100    =>> typeof number

console.log( "\n" );

console.log("    " + 100);  // [8] result =100      =>> typeof string
console.log("    " - 100);  // [9] result = -100    =>> typeof number

console.log(200 - "");      // [10] result =200     =>> typeof number

console.log( "\n" );


console.log(+"" + c);       // [11] result = 40     =>> typeof number
console.log(-"" + c);       // [12] result = 40     =>> typeof number
console.log(-"" - c);       // [13] result = -40    =>> typeof number

console.log( "\n" );

console.log(false - true);    //[14] result = -1    =>> typeof number
console.log(+false - +true);  //[15] result = -1    =>> typeof number
console.log(-false - -true);  //[16] result = 1     =>> typeof number

console.log( "\n" );

// c = 40   =>> typeof number
// d = "80" =>> type of string
// t = true

console.log(c + t);         //[17] result = 41      =>> typeof number       =>> [number + true]     =>> true = 1
console.log(d + t);         //[18] result = 80true  =>> typeof string       =>> [string + true]     =>> true = true


