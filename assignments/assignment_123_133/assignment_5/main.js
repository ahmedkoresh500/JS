/*
    * assignment [5]: [123:133] [D] 
*/

let theName = "Elzero";

console.log( theName.split("") );               // string to array

console.log( [...theName] );                    // string to array
console.log(Array.from(theName));               // string to array
console.log(new Array(...theName));             // string to array

console.log( Object.assign([], theName) );      // string to array

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']