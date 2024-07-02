/*
    * assignment [4]: [123:133] [D]

    * [repeat()] with string only   =>> not numbers
    * [split()] with string only    =>> not numbers

*/


let theNumber = 100020003000;

console.log( +[...new Set(theNumber.toString().split(""))].filter(ele => ele > 0).join("") );


// Needed Output
// 123