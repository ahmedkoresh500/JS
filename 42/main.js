/*
    * Array methods:
        [1] array.unshift(values)      =>> add element at the beginning of the array
        [2] array.push(values)         =>> add element at the end of the array

        [3] array.shift()                =>> remove element from the beginning of the array
        [4] array.pop()                  =>> remove element from the end of the array

*/

let MyFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

console.log(MyFriends);

MyFriends.unshift("Osama", "Nabil");    // add element at the beginning of the array
console.log(MyFriends);                 // origin array doesn't remain the same

MyFriends.push("Samah", "Eman");        // add element at the end of the array
console.log(MyFriends);                 // origin array doesn't remain the same

console.log("\n");

let FirstElement = MyFriends.shift();   // remove element from the beginning of the array
console.log(`First element removed from the array is: ${FirstElement}`);
console.log(MyFriends);


let LastElement = MyFriends.pop();      // remove element from the end of the array
console.log(`last element removed from the array is: ${LastElement}`);
console.log(MyFriends);
