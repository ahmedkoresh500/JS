/*
    * DOM: [classList] object  =>> used alot in practical exercises

        [1] classList.length
        [2] classList.contains("oneClassValue")      =>> result = boolean (true or false)
        [3] classList.item(oneIndex)                 =>> result = one class value

        [4] classList.add("classValue", "classValue")
        [5] classList.remove("classValue", "classValue")
        [6] classList.toggle("oneClassValue")


    * [L] of [classList] must be uppercase      =>> result = undefined

    * hangman game =>> by javascript
        =>> hidden letters and choose the right letter
        =>> using specific class
*/


let divElement = document.getElementById("my-div");    // result = first element only [one id]

console.log(divElement.classList);                     // result = DOMTokenList object
console.log(typeof divElement.classList);              // result = object
console.log(`${"#".repeat(30)}\n\n`);


console.log(`Length = ${divElement.classList.length}`);
console.log( divElement.classList.contains("Ahmed") );      // result = false
console.log( divElement.classList.contains("show") );       // result = true
console.log(`${"#".repeat(30)}\n\n`);

console.log( divElement.classList.item(0) );                // result = one  =>> with or without [""]
console.log( divElement.classList.item("1") );              // result = two  =>> with or without [""]


divElement.onclick = function(){
    // [1] [classList.add()]
    divElement.classList.add("add-one", "add-two");         // two are the same
    this.classList.add("add-three", "add-four");            // two are the same  [this] refers to parent = divElement

    // [2] [classList.remove()]
    divElement.classList.remove("add-two", "add-four");     // [a] results wateched in [Elements] not [console]

    // [3] [classList.toggle()]
    divElement.classList.toggle("Ahmed");               // [a] result wateched in [Elements] not [console]
                                                        // found      =>> remove
                                                        // not found  =>> add
}

/*
    * difference between [onclick] [addEventListener()]
        [1] all [addEventListener()] will be executed
        [2] more than one [onclick] function =>> last one will be executed  
                =>> for one element only
*/

/*
element.onclick = function(){   // more than one [onclick] function  =>> last one will be executed
    console.log();
}
*/


/*
    [1] [<button>]  =>> [submitEvent] object
    [2] [<a>]       =>> [pointerEvent] object
    [3] [<div>]     =>> [DOMTokenList] object
*/