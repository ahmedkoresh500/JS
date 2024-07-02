/*
    * regular expression:

    * qunatifiers [part 3]:
        [1] ^       =>> starts with something           =>> sentence
        [2] $       =>> ends with something             =>> sentence
        [3] ?=      =>> followed by something
        [4] ?!      =>> not followed by something
*/

let string1 = "We love programming";
let names1 = "1Esamaz2AhmedZ 3Mohammed 4moustafaZ 5GamalZ";

// [1] starts with something
console.log( /^we/i.test(string1) );    // [result = boolean] (true or false)   =>> sentence not word
console.log( /^1o/ig.test(names1) );    // [result = boolean] (true or false)   =>> sentence not word
console.log( /^2A/ig.test(names1) );    // [result = boolean] (true or false)   =>> sentence not word
console.log(`${"#".repeat(30)}\n\n`);

console.log( /^\d/ig.test(string1) );   // [result = boolean] (true or false)   =>> sentence not word
console.log( /^\d/ig.test(names1) );    // [result = boolean] (true or false)   =>> sentence not word
console.log(`${"#".repeat(30)}\n\n`);


// [2] ends with something
console.log( /ing$/ig.test(string1) );                                          // =>> sentence not word
console.log( /lz$/ig.test(names1) );                                            // =>> sentence not word
console.log( /lz$/.test(names1) );                                              // =>> sentence not word
console.log( /lz$/g.test(names1) );                                             // =>> sentence not word
console.log( /ed$/.test(names1) );                                              // =>> sentence not word
console.log(`${"#".repeat(30)}\n\n`);


// [3] [?=] followed by something
// let string1 = "We love programming";
// let names1 = "1Osamaz2AhmedZ 3Mohammed 4moustafaZ 5GamalZ";

console.log( names1.match(/\d\w{5}/ig) );
console.log( names1.match(/\d\w{5}(?=Z)/ig) );      // parentheses is a must  =>> [Z] not included
console.log( names1.match(/\d\w{5}(?=med)/ig) );    // parentheses is a must  =>> [med] not included
console.log("\n");

// [4] [?!] not followed by something
console.log( names1.match(/\d\w{8}(?!Z)/ig) );      // parentheses is a must


