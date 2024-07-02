/*
    * string methods:

        [1] access with index       =>> [1] two are equal
                                    =>> accept 0 and positive indexes included only

        [2] access with [charAt()]  =>> [1] two are equal
                                    =>> [A] of [At] must be uppercase
                                    =>> accept 0 and positive indexes included only

        [3] length                  =>> first letter = index 1


        [4] trim                    =>> trim first and last white spaces =>> not medium spaces
        
        [5] toUppercase()           =>> [U] of [Uppercase] must be uppercase
        [6] toLowercase()           =>> [L] of [Lowercase] must be uppercase

        [7] chain method
        [8] repeat

*/

let theName = " Ahmed mohamed ";    // [1] [all = 14 indexes]
let theList = [1, 2, 3, 4, 5];

console.log(theName);
console.log( theName[3] );              // [1] result = [m]
console.log( theName[0] );              // [1] accept 0 =>> result = space at the first
console.log( theName[17] );             // [1] result = [undefined]     [index] > [available indexes]
console.log( theName[-2] );             // [1] result = [undefined]

console.log("\n");


console.log( theName.charAt(3) );       // [2] result = [m]

console.log( theName.charAt(0));        // [2] accept 0 =>> result = space at the first
console.log( theName.charAt(17) );      // [2] result = [empty string]      [letter number] > [length]
console.log( theName.charAt(-2) );      // [2] result = [empty string]
console.log( theName.charAt(3) )        // [2] result = [m]

console.log("\n");

console.log( theName.length );          // [3] first letter = index 1
console.log( theName.trim() );          // [4] trim
console.log( theName.trim().length );   // trim & length

console.log("\n");

console.log( theName.toUpperCase() );   // [5] toUppercase()  =>> all letters uppercase
console.log( theName.toLowerCase() );   // [6] toLowercase()  =>> all letters lowercase

console.log("\n");

console.log( theName.trim().charAt(1).toUpperCase() );  // [7] chain method

console.log("\n");

console.log( theName.repeat(4) );       // [8] repeat


