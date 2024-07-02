/*
    * regular expression: [modifiers]

    * syntax:
        [1] /pattern/modifiers
        [2] new RegExp("pattern", "modifiers");

    * [modifiers] = [flags]:
        [1] i  =>> not sensitive to     =>> upper and lower cases
        [2] g  =>> global               =>> more than one value
        [3] m  =>> multilines

    * search method:
        variable.match(/pattern/modifiers);         // if found   =>> result = object   =>> array of objects
*/


let string1 = "Hello elzero Web School elzero I Love Elzero";
let regExp = /elzero/;


console.log( string1.match(/elzero/) );

console.log( string1.match(regExp) );
console.log( string1.match(/Elzero/) );
console.log(`${"#".repeat(30)}\n\n`);



console.log( typeof string1.match(/elzero/) );      // if found   =>> result = object   =>> array of objects
console.log( string1.match(/elzero/)[0] );          // if found   =>> result = object   =>> array of objects
console.log( string1.match(/elzero/)["index"] );    // if found   =>> result = object   =>> array of objects
console.log(`${"#".repeat(30)}\n\n`);



console.log( string1.match(/elzero/i) );            // if found   =>> result = object   =>> array of objects
console.log( string1.match(/elzero/g) );            // if found   =>> result = object   =>> array of objects
console.log( string1.match(/elzero/ig) );           // if found   =>> result = object   =>> array of objects
console.log(`${"#".repeat(30)}\n\n`);

console.log( string1.match(/elzeros/i) );           // not found  =>> result = null


