/*

    * DOM: [check attributes & examples]

        [1] Element.attributes;                         =>> result = object  =>> array of objects
        [2] Element.hasAttributes();                    =>> result = boolean (true or false)

        [3] Element.setAttribute("attributeName", "attributeValue");
        [4] Element.getAttribute("attributeName");      =>> result = ["attributeValue"]

        [5] Element.removeAttribute("attributeName");
        [6] Element.hasAttribute("attributeName");      =>> result = boolean (true or false)

    * [title] [alt] in [<img>] tag  =>> enhance SEO [search engine optimization]
*/

// [1] [Element.attributes]
let paragraphs = document.getElementsByTagName("p");        // result = HTML collection [array]
console.log(paragraphs);                                    // result = HTML collection [array]
console.log(paragraphs[0]);
console.log(`${"#".repeat(30)}\n\n`);


console.log(paragraphs[0].attributes);                      // result = object  =>> [NamedNodeMap] object
console.log(typeof paragraphs[0].attributes);               // [0] not written  =>> result = undefined
console.log( paragraphs[0].attributes[0] );                 // result = [class="para"]
console.log(`${"#".repeat(30)}\n\n`);

// [2] [Element.hasAttributes)()]
if( paragraphs[0].hasAttributes() ){                        // parentheses is a must
    console.log( "p tag has attributes" );
}


// [3] Element.setAttribute("attributeName", "attributeValue")
// [5] Element.removeAttribute("attributeName")
// [6] Element.hasAttribute("attributeName")    =>> result = boolean (true or false)

document.addEventListener("click", function(){

    // [1] check ["data-src"] attribute is exist
    if (paragraphs[0].hasAttribute("data-src")) {
        // [2] check ["data-src"] attribute is empty
        if (paragraphs[0].getAttribute("data-src") === ""){
            paragraphs[0].removeAttribute("data-src");
        }else{
            paragraphs[0].setAttribute("data-src", "New Value");
        }
    }else{
        // [1] if attribute not found
        paragraphs[0].setAttribute("data-src", "old value");
    }

})



/*
    * line [35]:
        =>> difference between:
            [1] Element.setAttribute("attributeName", "attributeValue");    class   =>> HTML attribute
            [2] Element.style.setProperty(propertyName, value, priority);   color   =>> css seclector 

    * [Lesson 96]:
*/

