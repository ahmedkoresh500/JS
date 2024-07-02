/*
    * Assignment [5]:  =>> Done
*/

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let regExp = /\d{2}\W*\d{2}(\W)*\d{2,}/ig; // Write Pattern Here

console.log(date1.match(regExp));   // "25/10/1982"
console.log(date2.match(regExp));   // "25 - 10 - 1982"
console.log(date3.match(regExp));   // "25 10 1982"
console.log(date4.match(regExp));   // "25 10 82"