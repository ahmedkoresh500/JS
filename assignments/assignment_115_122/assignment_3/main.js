/*
    * assingment [3]: [115:122] [D]
*/


let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// the rest of array  =>> into variable array
let arr4 = [...arr1, ...arr2, ...arr3];
console.log(arr4);      // result = ['Ahmed', 'Sameh', 'Sayed', 'Mohamed', 'Gamal', 'Amir', 'Haytham', 'Shady', 'Mahmoud']


// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring code Here
[c, , , , , , , a, b] = arr4;


console.log(`My Best Friends: ${a}, ${b}, ${c}`);
// result = [My Best Friends: Shady, Mahmoud, Ahmed]