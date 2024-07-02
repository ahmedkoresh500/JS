/*
    * assignment [7]: [123:133] [D] 
*/

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];


console.log([...numsOne, ...numsTwo]);              // three are the same
console.log(new Array(...numsOne, ...numsTwo));     // three are the same
console.log( numsOne.concat(numsTwo) );             // three are the same


// Needed Output
// [1, 2, 3, 4, 5, 6]


