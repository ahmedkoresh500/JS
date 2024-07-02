/*
    * Assignment [3]:  =>> Done
*/

let phone = "+(995)-123 (4567)";
let regExp = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/g;

console.log( phone.match(regExp) );             // result = array


let array1 = phone.match(regExp);               // result = array
console.log( array1 );                          // result = array
console.log( array1[0] );                       // result = array