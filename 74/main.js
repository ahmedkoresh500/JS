/*
    * higher order function: [map & filter practice]
*/

// EX [1]: filter words more than 4 letters
let Sentence = "i love foood code too playing much";

let FilteredWords = Sentence.split(" ").filter( function(ele){
    return ele.length <= 4;
} ).join(" ");
console.log(FilteredWords);

// easy EX =>> i didn't do
let IgnoreNumbers = "Elz123er4o";


// EX [3]: filter string =>> then multiply numbers
let Mix = "A13BS2ZX";
let Multiplied = 1;
let Multiplication = Mix.split("").map( function(ele){
    //return Number.isInteger( parseInt(ele) ) ? Multiplied = Multiplied * ele : "";
    return !isNaN( parseInt(ele) ) ? Multiplied = Multiplied * ele : "";
} );
console.log(`multiplied numbers = ${Multiplied}`);
console.log(Multiplication);                          // array


// EX [4]:  =>> filter string  =>> then numbers exponentiation
let MixedContent = Mix.split("").filter( function(ele){
    //return Number.isInteger( parseInt(ele) );
    return !isNaN( parseInt(ele) );
} ).map( function(ele){
    return ele * ele;
} );
console.log(`exponentiation numbers = ${MixedContent}`);    // MixedContent = array
console.log( MixedContent[0] );

// template literals change array shape from [1, 9, 4]  to  1,9,4  =>> but the same value


