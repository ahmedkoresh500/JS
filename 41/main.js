/*
    * array: [length] attribute
*/

let string = "Hello World !";
console.log(string.length);                 // [a] number of letters in the string = 13

let MyFriends = ["Ahmed", "Zaki", "Sayed", "Alaa"];

console.log(MyFriends.length);              // [b] number of elements in the array = 4
console.log(MyFriends);

console.log("\n");

MyFriends[6] = "Hambota";                   // [1] add new element
console.log(MyFriends);
console.log(MyFriends.length);


//MyFriends[] = "Te5a";                     // not error in php

MyFriends[MyFriends.length] = "Te5a";       // [1] add new element  =>> at the end of the array
// MyFriends.push("Te5a");
console.log(MyFriends);


MyFriends[3] = "Gamal";                     // [2] modify existing element
console.log(MyFriends);

MyFriends[MyFriends.length -1] = "Sasa";    // [2] modify last element
console.log(MyFriends);

MyFriends.length = 4                        // assigning my array to 4 elements
console.log(MyFriends);


