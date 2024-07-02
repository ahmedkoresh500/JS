/*
    * DOM [events]:
        [1] Element.onclick
        [2] Element.onmouseenter    =>> when hover on
        [3] Element.onmouseleave    =>> when nover out
        [4] oncontextmenu           =>> to make special menu when press right click in the browser 
                                    =>> [like Google drive]


        [5] window.onload
        [6] window.onscroll
        [7] window.onresize

        [8] Element.onfocus          =>> when standing inside input   =>> الحقل
        [9] Element.onblur           =>> when standing outside input  =>> الحقل
        [10] Element.onsubmit        =>> to test data from client side =>> before back-end requests

    * event =>> optional

    * Element.onclick = function(){                 =>> anonymous function
        console.log();
    }
*/

let btnElement = document.getElementById("btn");                    // by [tagName]
let inputElement1 = document.querySelector("[type='text']");        // two are the same  =>> by attributes
let inputElement2 = document.querySelector("input[type='text']");   // two are the same  =>> by attributes
let btnSubmitElement = document.querySelector("[type=submit]");
let formElement = document.querySelector("form");                   // by [tagName]

// [1] [Element.onclick]
// more than one [onclick] function  =>> last one will be executed
btnElement.onclick = function(){                           // anonymous function
    console.log("Clicked");
};

// [2] [Element.onmouseenter]
btnElement.onmouseenter = function(){                      // anonymous function
    console.log("* [onmouseenter] Event");
}

// [3] [Element.onmouseleave]
btnElement.onmouseleave = function(){
    console.log("** [onmouseleave] Event");
}




// [5] [window.onload()]
window.onload = function(){
    console.log("webpage loaded");
}

// [6] [window.onscroll()]                  // use:  =>> make [back-to-top] button
window.onscroll = function(){               // anonymous function
    console.log("scrolled vertically");
}

// [7] [window.onresize]
window.onresize = function(){               // anonymous function
    console.log("resized horizontally");
}




// [8] [Element.onfocus]
inputElement1.onfocus = function(){
    console.log("input focused");
}

// [9] [Element.onblur]
inputElement1.onblur = function(){
    console.log("input blured");
}


// [10] [Element.onsubmit]
formElement.onsubmit = function(event){
    console.log("to test data from client side before backend requests");

    // return false;        // two are the same
    event.preventDefault(); // two are the same   =>> prevent normal behavior [sending data]

    console.log(event);                         // result = [submitEvent] object
    console.log(typeof event);                  // result = object

    // btnSubmitElement.preventDefault();       // it doesn't work
    // formElement.preventDefault();            // it doesn't work
}


