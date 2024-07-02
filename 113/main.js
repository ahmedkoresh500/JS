/*
    * BOM: [sessionStorage]
            =>> data stored in [storage] object to be used in my application

        [1] window.sessionStorage.setItem("key", "value")   =>> [I] of [Item] must be uppercase
        [2] window.sessionStorage.getItem("key")            =>> [I] of [Item] must be uppercase
        [3] window.sessionStorage.removeItem("key")         =>> [I] of [Item] must be uppercase
        [4] window.sessionStorage.clear()                   =>> remove all items
        [5] window.sessionStorage.key(index)                =>> to get [key] through it's [index]

    * Info:
        [1] expiration time             =>> when closing tab
        [2] http & https                =>> sessionStorage in [http & https] is different

        [3] New tab                     =>> new session
        [4] new tab with the same URL   =>> new session
        [5] duplicate tab               =>> copy session

        [5] has [length] attribute


    * difference between [localStorage] & [sessionStorage]
        =>> [localStorage]      =>> no expiration time
        =>> [sessionStorage]    =>> expiration time     =>> when closing tab

    * not CSS selectors
    * CSS properties in sessionStorage           =>> must be [camelCase] method     =>> best solution

    * keys  =>> never ordered by insertion      =>> ordered ASC

    * HTMLelement.innerHTML
    * HTMLelement.innerText
    * HTMLelement.textContent
    * input.value
*/

console.log(window.sessionStorage);                 // [2] result = sessionStorage object
console.log(typeof window.sessionStorage);          // [1] result = object

// window.localStorage.setItem("color", "green");   // two are different
// window.sessionStorage.setItem("color", "blue");  // two are different


let inputElement = document.querySelector(".name"); // calling class with [.]   =>> same calling like CSS
let mainDiv = document.querySelector(".main-div");  // calling id with [#]      =>> same calling like CSS
let showDiv = document.querySelector(".show-div");

inputElement.onblur = function(){
    window.sessionStorage.setItem("input-name", inputElement.value);

    if( window.sessionStorage.getItem("input-name") ){
        let inputNameValue = window.sessionStorage.getItem("input-name");

        showDiv.appendChild( document.createTextNode(inputNameValue) ); // way [1]  =>> two are the same
        // showDiv.innerHTML = inputNameValue;                          // way [2]  =>> two are the same
    }
};


