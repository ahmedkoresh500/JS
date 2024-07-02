/*
    * DOM: [addEventListener()]
        =>> addEventListener( "click", [object] or [function] )  
                                                        =>> [click]  =>> keyword in [addEventListener()]


    * [event.target]         :HTML element that triggered the event (user clicked on) =>> two are the same
    * [event.currentTarget]  :HTML element that eventListener is attached to          =>> two are the same
*/

let p1 = document.querySelector("p");             // by [tagName]  =>> result = first element only

p1.onclick = function(){
    let clonedP = p1.cloneNode(true);
    clonedP.className = "cloned-P";
    document.body.appendChild(clonedP);     // without document  =>> body = syntax error
                                            // include element at the end
    /*
    // true solution [1]
    clonedP.onclick = function(){
        console.log("cloned p");
    }
    */
};


/*
let clonedP = document.querySelector(".cloned-P");     // syntax error  =>> [clonedP] not found
clonedP.onclick = function(){
    console.log("i'm cloned");
}
*/


//true solution [2]
document.addEventListener("click", function(event){ 
    console.log(event.target);          // [event] object   =>> [type = click]
                                        // [event] object   =>> [returnValue = false]

    if(event.target.className === "cloned-P"){             // element.attribute =>> camelCase method
        console.log("cloned");
    }
});


// anything except [object] or [function]       = syntax error
// p1.addEventListener("click", "string");      // syntax error