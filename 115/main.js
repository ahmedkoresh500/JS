/*
    * Destructuring:
        =>> extracting data from [array], [object], [map] into variables.

    [1] destructuring arrays:
        * [let]     =>> if variables weren't declared
*/


let a = 1;
let b = 2;
let c = 3;
let d = 4;

let MyFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];



// case [1]:
// [1] variables without let =>> declared before
// [2] [number of variables] < [array elements]
[a, b, c] = MyFriends;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(`${"#".repeat(30)}\n\n`);

// case [2]:
// let MyFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];
// [number of variables] > [array elements]
[a, b, c, d, e] = MyFriends;
console.log(e);                 // result = undefined
console.log( MyFriends[4] );    // result = undefined
console.log(`${"#".repeat(30)}\n\n`);

// case [3]:
// let MyFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];
[a = "A", b, c, d, e = "Osama"] = MyFriends;
console.log(a);                 // result = ["Ahmed"] not ["A"]
console.log(e);                 // result = ["Osama"]           =>> not in array
console.log( MyFriends[4] );    // result = ["undefined"]
console.log(`${"\#".repeat(30)}\n\n`);



// case [4]:
// let MyFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];
// won't print ["Ahmed"] ["Ali"]
[ , b, , c] = MyFriends;
console.log(b);         // result = Sayed
console.log(c);         // result = Maysa
console.log(`${"#".repeat(30)}\n\n`);


// case [5]:
// the rest of array  =>> into variable array
let List = [1, 2, 3, 4, 5, 6, 7];
let [x, y, ...rest] = List;             // spread operator  =>> lesson [132]
console.log(rest);

// case [6]:
// let List = [1, 2, 3, 4, 5, 6, 7];
[...rest] = List;
console.log(rest);


