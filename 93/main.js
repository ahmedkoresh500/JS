/*
    * DOM: [validate form] & [event.preventDefault();]

    * [HTMLelement.innerHTML]
    * [HTMLelement.innerText]
    * [HTMLelement.textContent]

    * [input.value]


    * [HTMLelement.innerHTML.length]
    * [input.value.length]          =>> [v] of [value]   =>> must be [lowercase]
                                    =>> [l] of [length]  =>> must be [lowercase]

*/



// EX [1]
document.links[0].onclick = function(event){
    console.log(event);                 // result = [pointerEvent] object   =>> [type = click]
    console.log(typeof event);          // result = object                  =>> [returnValue = false]
    event.preventDefault();             // prevent normal behavior =>> going to [www.google.com]
};


// EX [2]
/* 
    * [forms]:
    =>> if inputs data are valid:
        =>> no results in console
        =>> result in query string
*/

// no square brackets [] = syntax error
let UserNameInput = document.querySelector("[name='UName']");   // by [Atrributes]
let AgeInput = document.querySelector("[name='Age']");          // by [Attributes]


// Element.onsubmit     =>> to test data from client side  =>> before back-end requests
document.forms[0].onsubmit = function(event){
    // [b] print input [value]
    console.log(UserNameInput.value);
    console.log(UserNameInput.value.length);
    console.log(AgeInput.value);
    console.log(AgeInput.value.length);

    let UserValid = false;
    let AgeValid = false;

    // check [User Input] empty or not
    if(UserNameInput.value != "" && UserNameInput.value.length <= 10){
        console.log("User Input is valid");
        UserValid = true;
    }else{
        console.log("User Input is not valid");
    }

    // check [Age Input] empty or not
    if(AgeInput.value != ""){                   // [2] not empty    =>> two are the same
    // if(AgeInput.value){                      // [1] full         =>> two are the same
        console.log("Age Input is Valid");
        AgeValid = true;
    }else{
        console.log("Age Input is not Valid");
    }


    // way [1]
    if(UserValid === false || AgeValid === false){
        event.preventDefault();            // prevent normal behavior = [sending data]
        console.log("can't send data");
    }else{
        console.log("[User Input] & [Age Input] are valid");
    }

    /*
    // way [2]
    if(UserValid != false && AgeValid != false){                    // two are the same
    // if(UserValid == true && AgeValid == true){                   // two are the same
        console.log("[User Input] & [Age Input] are valid");
    }else{
        return false;               // two are the same
        // event.preventDefault();  // two are the same  =>>  prevent normal behavior = [sending data]
    }
    */
};


