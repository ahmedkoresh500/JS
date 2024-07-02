/*
    * joining arrays:

    [1] syntax of [array.concat()]
        =>> array.concat( Array1, Array2, ManualValue, ManualArray )


    [2] syntax of [array.join()]
        =>> array.join(separator)

    * separator =>> optional    =>> default = [,]

    * [|] =>> pipe line
*/


let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haitham", "Shady"];


// [1] array.concat( Array1 , Array2 , ManualValue , ManualArray )
let allFriends = myFriends.concat( myNewFriends, schoolFriends, "Gameel", [1, 2] );
console.log(allFriends);

console.log("\n");

// [2] array.join( separator )
console.log( allFriends.join() );                       // array to string
console.log( allFriends.join("") );                     // array to string
console.log( allFriends.join(" # ") );                  // array to string
console.log( allFriends.join(" # ").toUpperCase() );    // array to string


/* 
    * very important notice:
        =>> [#] was put [after first element] [before last element] in the array
*/


