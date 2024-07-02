/*
    * DOM: SET/GET [elements content & attributes]
        [1] Get [elements content & attributes]
            [a] .innerHTML
            [b] .innerText
            [c] .textContent

        [2] SET [elements content & attributes]             =>> [1] access directly
                Element.attribute = value;

        [2] SET [elements content & attributes]             =>> [2] access through methods
            [1] Element.setAttribute("attributeName", "attributeValue")
            [2] Element.getAttribute("attributeName")

    * search in google:
        [.innerText]


    * document.querySelector("")        =>> result = first element only   
    * document.querySelectorAll("")     =>> result = nodelist array
*/


// [1] Get [elements content & attributes]
let divElement1 = document.querySelector(".div1");      // calling class with [.]
let divElement2 = document.querySelector(".div2");      // calling class with [.]




console.log(divElement1);               // [1] print new text from [innerHTML] below
console.log(divElement2);               // [1] print new text from [textContent] below
console.log(`${"#".repeat(30)}\n\n`);

console.log(divElement1.innerHTML);     // [2] print old text  =>> [HTML] tags as text
console.log(divElement2.textContent);   // [2] print old text  =>> [HTML] tags as tags  =>> in the browser  =>> doesn't appear
console.log(`${"#".repeat(30)}\n\n`);


// =================================
divElement1.innerHTML = " [innerHTML] from <span> [main.js] file </span>";
divElement2.textContent = " [textContent] from <span> [main.js] file </span>";  // better than writing entities = [&lt;] & [&gt;]
// =================================


console.log(divElement1.innerHTML);     // [3] print new text   =>> [HTML] tags as text
console.log(divElement2.textContent);   // [3] print new text   =>> [HTML] tags as text
console.log(`${"#".repeat(30)}\n\n`);

console.log(divElement1);
console.log(divElement2);
console.log(`${"#".repeat(30)}\n\n`);




// [2] SET [elements content & attributes]          // [1] access directly
document.images[0].src = "1.jpg";
document.images[0].id = "pic";
document.images[0].className = "myImg";             // [1] access directly [camelCase method]

console.log(document.images[0].className);          // [class] only  =>> result = undefined
console.log(`${"#".repeat(30)}\n\n`);


// SET [elements content & attributes]              // [2] access through methods
let MyLink = document.querySelector(".googleLink"); // calling class with [.]  =>> same calling like CSS

console.log( MyLink.getAttribute("href") );
console.log( MyLink.getAttribute("class") );


MyLink.setAttribute("href", "https://www.google.com");                  // two are equal
// MyLink = MyLink.setAttribute( "href", "https://www.google.com" );    // two are equal
// console.log(MyLink);                                                 // result = [undefined]


/*
    * Element.Attribute                 =>> camelCase method    =>> EX: [element.className]
    * Element.style.cssAttribute        =>> camelCase method    =>> EX: [element.style.backgroundColor]
*/

