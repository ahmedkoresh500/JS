/*
    * data type array = list = المصفوفه
*/

// [1] create array
// [a] normal array
let MyArray = [ "Ahmed" , "Mohamed" , "Sayed" ];    // create array =>> normal array
console.log( `Hello ${MyArray[0]}` );               // access array =>> specific element
console.log( `Hello ${MyArray[1][0]}` );            // access array =>> specific element =>> specific letter

// [1] create array
// [b] nested array
MyArray = [ "Ahmed" , "Mohamed" , "Sayed" , [ "Marwan" , "Ali" ] ]; // create array =>> nested array
console.log(`Hello ${MyArray[3]}` );                // access array => whole nested array
console.log(`Hello ${MyArray[3][0][3]}` );          // access array =>> whole nested array =>> specific element =>> specific letter

console.log( "\n" );

// [2] modify array
// [a] normal array
console.log( MyArray );
MyArray[1] = "Zaki";                                // modify specific element =>> modify existing element
console.log( MyArray );

// [2] modify array 
// [b] nested array
MyArray[3] = "Sameh";                               // modify nested array with element
console.log( MyArray );

MyArray[3] = ["Sameh" , "Abdo" , "Omar"];           // modify element with nested array
console.log( MyArray );

console.log( "\n" );

console.log( typeof MyArray );                      // object =>> typeof array
console.log( Array.isArray(MyArray) );              // result = true

let string = "zero";
console.log(Array.isArray(string))                  // result = false
// [Array]  =>> constructor in OOP
// [A] of [Array] =>> must be uppercase
