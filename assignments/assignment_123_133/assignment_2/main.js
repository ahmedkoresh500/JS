/*
    * assignment [2]: [123:133] [D]
*/

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

let uniqueFriends = new Set(myFriends);

console.log([...uniqueFriends].sort());             // three are the same
console.log(Array.from(uniqueFriends).sort());      // three are the same
console.log(new Array(...uniqueFriends).sort());    // three are the same

// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']