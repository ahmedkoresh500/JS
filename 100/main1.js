/*
    * DOM: [addEventListener()]

    * Element.addEventListener("", anonymous function);

            =>> attach event with element  =>> more than one event

    * all [addEventListener()] will be executed
    * more than one [onclick] function =>> last one will be executed  
        =>> for one element only

    * search on google:
        [1] capture & pubbling javascript
        [2] removeEventListener();
*/


let p1 = document.querySelector("p");     // by [tagName]  =>> result = first element only

function one(){
    console.log("message from ONCLICK 1");
}

function two(){
    console.log("message from ONCLICK 2");
}

function three(){
    console.log("message from addEventListener() [function three]");
}

function four(){
    console.log("message from addEventListener() [function four]");
}

// more than one [onclick] function =>> last one will be executed
p1.onclick = one;                       // without parentheses  =>> not to called directly
p1.onclick = two;                       // without parentheses  =>> not to make syntax error


window.onload = "Ahmed";                                // result = nothing
p1.addEventListener("click", function(){                // [click] =>> keyword in [addEventListener()]
    console.log("message from addEventListener()");
});

p1.addEventListener("click", three);    // without parentheses  =>> not to called directly
p1.addEventListener("click", four);     // without parentheses  =>> not to make syntax error


// anything except [object] or [function]    = syntax error
// p1.addEventListener("click", "string");   // syntax error


