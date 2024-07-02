/*
    * regular expression:

    * quantifiers [part 2]:
        [1] n{x}        =>> number of
        [2] n{x,y}      =>> range
        [3] n{x,}       =>> at least
*/

let serials = "S123S S1234S S12345S S123456S";

console.log( serials.match(/S\d{3}S/ig) );
console.log( serials.match(/S\d{3,5}S/ig) );
console.log( serials.match(/S\d{4,}S/ig) );


