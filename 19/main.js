/*
    * [+] unary plus operator           معامل احادي زائد
        =>> string to number only

    * [-] unary negation operator       معامل نفي احادي
        =>> string to negative number

    * [0xff] = 255

    * console.log( Number("600") );

        =>> [N] of [Number] must be uppercase

*/



console.log(+100);      // [1] result = number [positive integer]
console.log("200");     // [2] result = string

console.log(+"300");    // [3] result = number [positive integer]
console.log(+"-400");   // [4] result = number [negative integer]

console.log(+"500.5");  // [5] result = number [positive float]
console.log(+"osama");  // [6] result = NaN         =>> Not a Number

console.log(+"0xff");   // [7] result = 255     [positive integer]

console.log(+null);     // [8] result = 0
console.log(+false);    // [9] result = 0
console.log(+true);     // [10] result = 1




console.log("\n\n");



console.log(-100);      // [1] result = number  [negative integer]
console.log("200");     // [2] result = string
console.log(-"300");    // [3] result = number  [negative integer]
console.log(-"-400");   // [4] result = number  [positive integer]
console.log(-"500.5");  // [5] result = number  [negative float]
console.log(-"osama");  // [6] result = NaN         =>> Not a Number

console.log(-"0xff");   // [7] result = -255    [negative integer]

console.log(-null);     // [8] result = -0
console.log(-false);    // [9] result = -0
console.log(-true);     // [10] result = -1

console.log(Number("600")); // constructor in OOP 
                            // = [Unary Plus Operator]  =>> string to number only

console.log( "\n" );

console.log( Number.MAX_SAFE_INTEGER ); // max safe integer in js
console.log( Number.MAX_VALUE );        // max integer in js
console.log( Number.MIN_VALUE );        // min integer in js