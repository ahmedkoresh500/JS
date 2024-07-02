/*
    * [DOM] document object model:
        =>> when loading the webpage =>> browser create complete model as object

    * DOM selectors:
        [1] document.getElementById("")             =>> result = first element only  [one id]
        [2] document.getElementSByTagName("")       =>> result = HTML collection [array]
        [3] document.getElementSByClassName("")     =>> result = HTML collection [array]
        [4] document.getElementsByName("");         =>> result = nodelist array
                                                    =>> [name] attribute in inputs

        [5] document.querySelector("")              =>> CSS selector    =>> result = first element only
            [a] can use everything
            [b] result = first element only
            [c] not supported in [internet explorer 8]
            [d] calling class with [.]              =>> calling id with [#]

        [6] document.querySelectorAll("")                               =>> result = nodelist [array]

        [7] find element by collection              =>> access directly
            [**] document.title                     [<title> </title>]
            [**] document.head                      [<head> </head>]
            [**] document.body                      [<body> </body>]

            [**] document.links                     =>> [a] = anchor tag
            [**] document.images
            [**] document.forms

    * document.title = window.document.title
*/


// [1] document.getElementById("")
console.log("[1]");
let divElement = document.getElementById("my-div");         // without hash
console.log(divElement);                                    // result = first element only  [one id]
console.log(`${"#".repeat(30)}\n\n`);



// [2] document.getElementsByTagName("")
console.log("[2]");
let paragraphElements = document.getElementsByTagName("p");
console.log(paragraphElements);                             // result = HTML collection [array]
console.log(typeof paragraphElements);                      // result = object  =>> array of objects
console.log("\n");

console.log( paragraphElements[0] );                        // [1] result = [<p> Test </p>]
console.log( paragraphElements[0].innerHTML );              // result = [Hello paragraph 1]
console.log( paragraphElements[0].innerHTML = "Test" );     // result = [Test]
console.log( paragraphElements[0].innerHTML );              // result = [Test]
console.log( paragraphElements[0] );                        // [1] result = [<p> Test </p>]
console.log(`${"#".repeat(30)}\n\n`);



// [3] document.getElementsByClassName("")
console.log("[3]");
let spanElements = document.getElementsByClassName("my-span")   // without dot
console.log(spanElements);                                      // result = HTML collection [array]
console.log(spanElements[0]);
console.log(`${"#".repeat(30)}\n\n`);



// [4] 
console.log("[4]");
let inputOne = document.getElementsByName("one");
console.log(inputOne);                                  // result = nodelist array
console.log( inputOne[0]);
console.log(typeof inputOne);                           // result = object   =>> array of objects
console.log(`${"#".repeat(30)}\n\n`);



// [5] document.querySelector("")
console.log("[4]");
let elementWithClass = document.querySelector(".special");  // [1] calling class with [.] =>> same calling like CSS
console.log(elementWithClass);                              // result = first element only

let elementWithId = document.querySelector("#my-div");      // [2] calling id with [#] =>> same calling like CSS
console.log(elementWithId);                                 // result = first element only

let elementSpan = document.querySelector("span");           // [3] by [tagName]
console.log(elementSpan);                                   // result = first element only

elementSpan = document.querySelector(`[class="my-span"]`);  // [4] by attributes
console.log(elementSpan);                                   // result = first element only
console.log(`${"#".repeat(30)}\n\n`);



// [6] document.querySelectorAll("")
console.log("[5]");
spanElements = document.querySelectorAll(".my-span");   // clling class with [.]
console.log(spanElements);                              // result = nodelist [array]
console.log(spanElements[0]);
console.log(spanElements[1]);
console.log(`${"#".repeat(30)}\n\n`);



// [7] find element by collection   =>> access directly
console.log("[6]");
console.log(document.title);
console.log(document.head);
console.log(document.body);
console.log(`${"#".repeat(5)}\n\n`);

console.log(document.links);                            // result = HTML collection [array]
console.log(document.links[0]);             // two are the same
console.log(document.links["0"].href);      // two are the same
console.log(`${"#".repeat(5)}\n\n`);

console.log(document.forms);                            // result = HTML collection [array]
console.log(document.forms[0]);                         // result = first form
console.log(document.forms[0].one);                     // calling input by [name] attribute

console.log(document.forms[0].one.value); 
console.log(document.forms[0].one.value = "Hello");     // manipulation  التلاعب




/*
    * [HTML] = hyper text markup language
    * [href] = hyper reference              =>> in [a] anchor tag

    * HTMLelement.innerHTML
    * HTMLelement.innerText
    * HTMLelement.textContent

    * input.value
*/


