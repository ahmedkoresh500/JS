/*
    * Destructuring:
        =>> extracting data from [array] [object] [map] into variables.

    [1] destructuring arrays:       =>> advanced example
    [1] destructuring arrays:       =>> let [] = array;
            * [let]   =>> if variables weren't declared
*/

let friendsArray = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];

// printing array value
console.log( friendsArray[3][2][1] );
console.log(`${"#".repeat(30)}\n\n`);


// printing array values  =>> with variables
let [ , , , [a, , [ , b]]] = friendsArray;              // two are the same
[ , , , [a, , [ , b]]] = friendsArray;                  // two are the same
console.log(a);         // result = Shady
console.log(b);         // result = Gamal
