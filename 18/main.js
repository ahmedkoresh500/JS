/*
    * Arithmetic operators:
         1- [+] Addition
         2- [-] Subtraction
         3- [*] Multiplication
         4- [/] Division
         5- [%] remainder / modulus

         6- [**] exponentiation [ES7]

         7- [x++]    يطبع بعد كدا يزود في الميموري [post]
            [x--]    يطبع بعد كدا ينقص في الميموري

         8- [++x]    يزود في الميموري بعد كدا يطبع [pre]
            [--x]    ينقص في الميموري بعد كدا يطبع

    * in console:
            * number =>> blue
            * string =>> black

*/


console.log(10 + 20);           // result = integer
console.log(10 + " osama");     // result = string    [+] =>> concatenation

console.log( "\n" );

console.log(10 - 20);           // result = integer
console.log(10 - "osama");      // result = [NaN]     =>> Not a Number
console.log(typeof NaN);        // typeof number      =>> [a] of [NaN] must be lowercase
console.log(typeof NAN);        // typeof undefined

console.log( "\n" );

console.log(10 * 20);
console.log(10 * -20);

console.log( "\n" );

console.log(10 / 20);
console.log(20 / 5);
console.log(20 / 3);

console.log( "\n" );

console.log(10 % 2);
console.log(11 % 3);

console.log( "\n" );

console.log(2 ** 4);

console.log( "\n" );

let x = 5;
console.log(x++);

let y = 15;
console.log(y--);

console.log( "\n" );

let w = 10;
console.log(++w);

let z = 20;
console.log(--z);
