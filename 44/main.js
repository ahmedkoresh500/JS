/*
    * Array methods:

        [1] Array.sort()
        [2] Array.reverse()
*/

let MyFriends = [10, "Sayed", "Mohamed", "90", 1000, 100, 20, "10", -20, "Alola", -10];

console.log(MyFriends);
console.log( MyFriends.reverse() );
console.log(`${"#".repeat(30)}\n\n`);


console.log( MyFriends.sort() );
console.log(MyFriends.reverse());
console.log(`${"#".repeat(30)}\n\n`);


// = chain method
console.log( MyFriends.sort().reverse() );
console.log(MyFriends);                   // origin array doesn't remain the same


