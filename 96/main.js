/*
    * DOM: [CSS styling] & styleSheets:
        [1] Element.style.cssproperty = "value";                    =>> camelCase method
        [2] Element.style.cssText = "attributes:values;";
        [3] Element.style.setProperty("property-name", "propertyValue", "priority") =>> priority = important flag  =>> [!important]
        [4] Element.style.removeProperty("Property-Name")     [inline style]

    * [-]  = [hyfen] sign

    * open with live server  =>> to avoid [CORS] policy error  
    * open with live server  =>> to avoid [rules] error
*/

let divElement = document.getElementById("my-heading");
console.log(divElement);


divElement.style.color = "green";                                              // [1] make inline style
divElement.style.fontWeight = "bold";       // [camelCase] method  =>> [w] is must


divElement.style.cssText = "color: brown; font-size:46px; opacity: .9";  
                                                                                // [2] make inline style


divElement.style.setProperty("font-weight", "normal", "important");             // [3] make inline style
divElement.style.setProperty("background", "bisque", "important");              // [3] make inline style
// divElement.style.removeProperty("color");                                    // [4] remove inline style


// [S] of [Sheets]  =>> must be uppercase
console.log( document.styleSheets[0].rules[0] );                    // result = [CSSStyleRule] object
console.log( typeof document.styleSheets[0].rules[0] );             // result = object
document.styleSheets[0].rules[0].style.setProperty("background-color", "violet");// [5] make external style

console.log( document.styleSheets[0].rules[0].style.removeProperty("color") );  // [6] remove external style
                                                // [rules] = [selectors] = [div]



/*
    * Element.attribute                 =>> camelCase method
    * Element.style.cssAttribute        =>> camelCase method    [A] is a must

    [1] [<button>]                              =>> [submitEvent] object
    [2] [<a>]                                   =>> [pointerEvent] object
    [3] [<div>]                                 =>> [DOMTokenList] object
    [4] [document.styleSheets[0].rules[0]]      =>> [CSSStyleRule] object
*/


