/*
    * regular expression:

    * Ranges: part [1]
        [1] (x|y)  =>> x or y
        [2] [0-9]  =>> [from 0 to 9]
        [3] [^0-9] =>> any character except [from 0 to 9]
        [4] examples

    * Ranges: part [2]
        [1] [a-z]
        [2] [^a-z]
        [3] [A-Z]
        [4] [^A-Z]
        [5] [abc]
        [6] [^abc]

    * [modifiers] = [flags]:
        [1] i  =>> not sensitive to     =>> upper and lower cases
        [2] g  =>> global               =>> more than one value
        [3] m  =>> multilines
*/


// [1] [2]  =>> [a-z] [^a-z]
let string1 = "AaBbCcDdEeFfge123!234%&^*_";

// EX [1]:
let string1RegExp = /[a-z]/;
console.log( string1.match(string1RegExp) );    // if found   =>> result = object   =>> array of objects
                                                // result = first value found in string [a]

// EX [2]:
string1RegExp = /[a-z]/i;
console.log( string1.match(string1RegExp) );    // if found   =>> result = object   =>> array of objects
                                                // result = first value found in string [A]

// EX [3]:
string1RegExp = /[a-z]/g;
console.log( string1.match(string1RegExp) );    // result = more than one value  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'e']

// EX [4]:
string1RegExp = /[^a-z]/g;
console.log( string1.match(string1RegExp) );    // result = more than one value  ['A', 'B', 'C', 'D', 'E', 'F', '1', '2', '3', '!', '2', '3', '4', '%', '&', '^', '*', '_']
console.log(`${"#".repeat(30)}\n\n`);




// [3] [4]  =>> [A-Z] [^A-Z]
// let string1 = "AaBbCcDdEeFfge123!234%&^*_";
string1RegExp = /[A-Z]/g;
console.log( string1.match(string1RegExp) );    // result = more than one value

string1RegExp = /[^A-Z]/g;
console.log( string1.match(string1RegExp) );    // result = more than one value
console.log(`${"#".repeat(30)}\n\n`);




// [5] [6]  =>> [abc] [^abc]
// let string1 = "AaBbCcDdEeFfge123!234%&^*_";
// EX [1]:
string1RegExp = /[cfe]/;                        // specific letters
console.log( string1.match(string1RegExp) );    // if found   =>> result = object   =>> array of objects
                                                // result = first value found in string [c]

// EX [2]:
string1RegExp = /[cfe]/g;                       // specific letters
console.log( string1.match(string1RegExp) );    // result = more than one value  ['c', 'e', 'f', 'e']

// EX [2]:
string1RegExp = /[CFE]/g;                       // specific letters
console.log( string1.match(string1RegExp) );    // result = more than one value  ['C', 'E', 'F']

// EX [3]:
string1RegExp = /[^cfe]/g;                      // specific letters
console.log( string1.match(string1RegExp) );    // result = more than one value  ['A', 'a', 'B', 'b', 'C', 'D', 'd', 'E', 'F', 'g', '1', '2', '3', '!', '2', '3', '4', '%', '&', '^', '*', '_']
console.log( `${"#".repeat(30)}\n\n` );




// Examples:
// let string1 = "AaBbCcDdefg123!234%&^*_";
// EX [1]:
string1RegExp = /[a-cA-C]/g;                    // upper and lower cases
console.log( string1.match(string1RegExp) );    // result = more than one value  ['A', 'a', 'B', 'b', 'C', 'c']

// EX [2]:
string1RegExp = /[^a-zA-Z]/g;                   // not upper and lower cases
console.log( string1.match(string1RegExp) );    // result = more than one value  ['1', '2', '3', '!', '2', '3', '4', '%', '&', '^', '*', '_']

// EX [3]:
string1RegExp = /[^a-zA-Z0-9]/g;                // special characters
console.log( string1.match(string1RegExp) );    // result = more than one value  ['!', '%', '&', '^', '*', '_']

// EX [4]:
string1RegExp = /[^a-z^A-Z0-9*]/g;              // special characters  =>> except [^] [*]
console.log( string1.match(string1RegExp) );    // result = more than one value  ['!', '%', '&', '_']


