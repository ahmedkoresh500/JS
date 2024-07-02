/*
    * DOM: [create elements] & [append methods]:

    * Note: always [document.create();]
            [1] document.createElement("elementName");
            [2] document.createAttribute("attributeName");
            [3] document.createTextNode("text");
            [4] document.createComment("commentText");


    * three ways to add attribute:

        [1] Element.attributeName = "attributeValue";                      // camelCase method

        [2] Element.setAttribute("attributeName", "attributeValue");

        [3] AttrName = document.createAttribute("attributeName");
            Element.setAttributeNode(AttrName);


    * ElementText = document.createTextNode("Text");
        Element.appendChild(ElementText);

    * important note:
        * Append    =>> include element at th end
        * prepend   =>> include element at the start
*/

// [1] create element
// [1] create HTML element
let divElement = document.createElement("div");


// [2] document.createAttribute("attributeName");
// way [1]
divElement.className = "product";                    // camelCase method

// way [2]
divElement.setAttribute("data-test", "testing");            // two are the same
// divElement.dataset.test = "testing";                     // two are the same

// way [3]:
let AttrName = document.createAttribute("data-custom");     // custom-attribute
divElement.setAttributeNode(AttrName);





// document.createTextNode("text");
let ElementText = document.createTextNode("product one");

// [a] append [textNode] into [divElement]
divElement.appendChild(ElementText);

// [b] append [divElement] into [body]
document.body.appendChild(divElement);                      // body without document = syntax error

// [c] append [commentText] into [divElement]
let commentText = document.createComment("this is div");
divElement.appendChild(commentText);                        // include element at the end


console.log(divElement);


/*
    * three ways to add class:
        [1] Element.className = "";                         // camelCase method
        [2] Element.classList.add("");
        [3] Element.setAttribute("class", "value");
*/
