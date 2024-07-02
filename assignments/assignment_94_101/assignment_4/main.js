/*
    * assingment [4]: [94:101] [D]
*/

// [1] selecting [divElement] from [HTML] page
let divElement = document.querySelector("div");



let object1 = divElement.lastChild;             // typeof object
let object2 =  divElement.childNodes;           // typeof object

console.log(object1);                           // result = object
console.log(object2);                           // result = [nodelist] object
console.log(`${"#".repeat(30)}\n\n`);


let text1 = divElement.lastChild.texContent;                    // result = undefined  =>> doesn't work
let text2 = divElement.childNodes[divElement.childNodes.length-1].textContent.trim(); // it works

console.log(text1);
console.log(text2);


