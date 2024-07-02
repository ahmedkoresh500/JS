/*
    * assignment [8]: [123:133] [D]
*/


let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log( n2.length * [...n1, ...n2].length * Math.min(...n1) );                 // 210
console.log( new Set(n1).size * new Array(...n1, ...n2).length * Math.min(...n2) ); // 210
console.log( new Set(n2).size * n1.concat(n2).length * n2.pop() ); // lesson [46]   // 210


// Needed Output
// 210