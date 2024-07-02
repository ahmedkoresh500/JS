/*
    * higher order function: [reduce()] practice
            =>> return one value not array
            =>> accept [conditional ternary operator] like [map] & [filter]
*/


// practice [1] =>> return longest word
let TheBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test"];

// [a] using =>> [for] loop
let LongestWordIndex = 0;
LongestWordLettersNumber = 0 ;
for( let i=0; i<TheBiggest.length ; i++){
    if( TheBiggest[i].length > LongestWordLettersNumber ){
        LongestWordLettersNumber = TheBiggest[i].length;
        LongestWordIndex = [i];
    }
}
console.log(`longest word is "${TheBiggest[LongestWordIndex]}" `);
console.log(`longest word index = ${LongestWordIndex}`);
console.log("\n");

// [b] using =>> higher order function [reduce()]
let Check = TheBiggest.reduce( function(acc , current){     // return one value not array
    return acc.length > current.length ? acc : current;
} );
console.log(`longest word using reduce = "${Check}" `);



// practice [2] =>> filtering "@"  then returning string
let RemoveChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let FinalString = RemoveChars.filter( function(ele){
    return ele !== "@";
    return ! ele.startsWith("@");
} );
console.log(FinalString);

// [a] using  [join()]
console.log( FinalString.join("") );

// using [reduce()]
FinalString = FinalString.reduce( function(acc, ele){   // return one value not array
    return `${acc}${ele}`;      // template literals
    return acc + ele;           // template string
} );
console.log(FinalString);

