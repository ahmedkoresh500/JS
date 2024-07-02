/*
    * assingment [4]: [115:122] [D]
*/


const member = {
    age: 30,
    working: false,
    country: "Egypt",
    hobbies: ["Reading", "Swimming", "Programming"],
};


// Write Your Destructuring code Here
let {age: a, working: w, country: c, hobbies: [h1, , h3]} = member;


console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// [1] result = [My Age Is 30 And Iam Not Working]

console.log(`I Live in ${c}`);
// [2] result = [I Live in Egypt]

console.log(`My Hobbies: ${h1} And ${h3}`);
// [3] result = [My Hobbies: Reading And Programming]