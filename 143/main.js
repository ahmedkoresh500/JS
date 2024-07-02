/*
    * regular expression:

    * string method:
        [1] replace(old_value, new_value);
        [2] replaceAll(old_value, new_value);
*/


let text1 = "We Love Programing @ Because @ it's Amazing";
console.log(text1);
console.log(`${"#".repeat(50)}\n\n`);

// EX [1]:
console.log( text1.replace("@", "JS") );    // first value only
console.log( text1.replaceAll("@", "JS") ); // all values
console.log(`${"#".repeat(50)}\n\n`);



// EX [2]: [replace()]
let regExp1 = /@/i;                     // [1] without [g]  =>> first value only
console.log( text1.replace(regExp1, "JS") );

// EX [3]: [replace()]
regExp2 = /@/ig;                        // [2] with [g]  =>> all values
console.log( text1.replace(regExp2, "JS") );
console.log(`${"#".repeat(50)}\n\n`);


/*
// EX [4]: [replaceAll()]
regExp = /@/i;                          // without [g] =>> syntax error
console.log( text1.replaceAll(regExp, "JS") );
console.log("\n");
*/

// EX [5]:
regExp3 = /@/ig;                        //  with [g] =>> no error
console.log( text1.replaceAll(regExp3, "JS") );


