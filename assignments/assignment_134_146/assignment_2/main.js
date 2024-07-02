/*
    * Assignment [2]:  =>> Done
*/

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let regExp = /Os\w*O/g;

console.log( specialNames.match(regExp) );

// Elzero   =>> three results
// my code  =>> four results