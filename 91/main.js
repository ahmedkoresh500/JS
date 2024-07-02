/*
    * DOM: [children]
        [1] Element.children                 // result = HTML collection [array]
        [2] Element.childNodes               // result = nodelist [array]

        [3] Element.firstChild
        [4] Element.lastChild

        [5] Element.firstElementChild
        [6] Element.lastElementChild
*/

let divElement = document.querySelector("div");     // by [TagName]
// let element = document.querySelector(".my-div"); // calling class with [.]  =>> same calling like CSS
console.log(divElement);
console.log(`${"#".repeat(30)}\n\n`);


// [1] children
console.log(divElement.children);       // [1] result = [HTML elements]
console.log(divElement.children[0]);
console.log(divElement.children[1]);
console.log(`${"#".repeat(30)}\n\n`);


// [2] childNodes
console.log(divElement.childNodes);     // [2] result = [html and non-html elements] =>> like [text] [spaces] [html comments]
console.log(divElement.childNodes[0]);  // result = ["firstChild inside div"]
console.log(divElement.childNodes[1]);
console.log(`${"#".repeat(30)}\n\n`);



// [3] [firstChild] & [lastChild]
console.log(divElement.firstChild);     // result = [<!-- firstChild inside div -->]
console.log(divElement.lastChild);      // result = ["lastChild text"]
console.log(`${"#".repeat(30)}\n\n`);



// [4] [firstElementChild] & [lastElementChild]
console.log(divElement.firstElementChild);  // result = [<p> Hello p </p>]
console.log(divElement.lastElementChild);   // result = [<span> Hello span </span>]


