
// string challenge
// all solutions must be in one chain
// using concatenation permitted

let a = "Elzero Web School";    // [all = 16 indexes] [length = 17]

// [1] Include these methods in your solution [slice() , charAt()]
// ouput =>> [Zero] 
// [Z] capital
// two solutions
console.log( a.charAt(2).toUpperCase() + a.slice(3 , 6) );
console.log( a[2].toUpperCase() + a.slice(3 , 6) );


// [2] return letter [H] eight times
// two solutions
console.log( a.charAt(13).toUpperCase().repeat(8) );


// [3] return array =>> one element =>> ['Elzero']
console.log( a.split( " " , 1 ) );


// [4] use only [substr] method + template literals in your solution 
// =>> to get the result [Elzero School]
// ["Elzero Web School"]
console.log( a.substr(0 , 7) + a.substr(-6) );

// [5] solution =>> must be dynamic even if string changes
// return the variable with the next conditions
// a- first and last letter must be lowercases
// b- all letters between first and last letter must be uppercases
console.log( a.substr(0 , 1).toLowerCase() + a.substr(1 , a.length-2 ).toUpperCase() + a.substr( a.length - 1 ).toLowerCase() );