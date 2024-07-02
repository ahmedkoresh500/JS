/*
    * assingment [4]: [86:93] [D]
*/

let inputOne = document.querySelector(".one");      // calling class with [.]
let inputTwo = document.querySelector(".two");      // calling class with [.]

[inputOne.title, inputTwo.title] = [inputTwo.title, inputOne.title];
[inputOne.innerHTML, inputTwo.innerHTML] = [inputTwo.innerHTML, `${inputOne.innerHTML}2`];

