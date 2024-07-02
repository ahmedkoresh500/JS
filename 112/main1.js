/*
    * [localStorage]: color-Application-Execise:  [revision]
*/

// getting HTML elements
let Lis = document.querySelectorAll("ul li");                   // by [tagName]
let reflectedDiv = document.querySelector(".reflected-color");  // calling class with [.]   =>> same calling like CSS
                                                                // calling id with [#]      =>> sama calling like CSS


// [removeActiveClass()] function   =>> from [Lis]
function removeActiveClass(){
    Lis.forEach( function(Li){
        Li.classList.remove("active");
    } );
}




// [1] execute [anonymous function] when loading the webpage
window.onload = function(){

    // [2] check [data-color] is found in localStorage
    if(window.localStorage.getItem("data-color")){      // [*] two are the same
    // if(window.localStorage.data-color){              // = syntax error here
    // if(window.localStorage["data-color"]){           // [*] two are the same

        // [3] call function to remove [active] class
        removeActiveClass();

        // [4] getting [Li] element which has data-color the same in [localStorage color]
        // [**] space between [ li[data-color] ]     = element inside li
        let correctLi = document.querySelector(`ul li[data-color=${window.localStorage.getItem("data-color")}`); // [**] two are the same
        // let correctLi = document.querySelector(`ul li[data-color=${window.localStorage.data-color}]`);        // = syntax error here
        // let correctLi = document.querySelector(`ul li[data-color=${window.localStorage["data-color"]}]`);     // [**] two are the same

        // [5] add [active] class to [correctLi]
        correctLi.className = "active";                     // three are the same
        // correctLi.classList.add("active");               // three are the same
        // currentLi.setAttribute("class", "active");       // three are the same

        // [6] add localStorage [color] to [reflectedDiv] background-color
        reflectedDiv.style.backgroundColor = window.localStorage["data-color"];
    }
}




// [7] loop on all [Lis]
Lis.forEach( function(Li){

    // [8] call [function]  =>> when click on specific [Li]
    Li.onclick = function(){

        // [9] call function to remove [active] class
        removeActiveClass();

        // [10] set new value to [localStorage] color
        window.localStorage.setItem("data-color", `${Li.getAttribute("data-color")}`);  // [**] two are the same
        // window.localStorage.data-color, `${Li.dataset.color}`);                      // = syntax error here
        // window.localStorage["data-color"] = Li.dataset.color;                        // [**] two are the same

        // [11] add [active] class to clicked [Li]
        Li.className = "active";                    // three are the same
        // Li.classList.add("active");              // three are the same
        // Li.setAttribute("class", "active");      // three are the same

        // [12] add [background-color] to [reflectedDiv]
        reflectedDiv.style.backgroundColor = window.localStorage.getItem("data-color");         // nine are the same
        // reflectedDiv.style.backgroundColor = window.localStorage["data-color"];              // nine are the same
        // reflectedDiv.style.backgroundColor = Li.dataset.color;                               // nine are the same

        // reflectedDiv.setAttribute("style", `background-color: ${window.localStorage.getItem("data-color");}`);   // nine are the same
        // reflectedDiv.setAttribute("style", `background-color: ${window.localStorage["data-color"]}`);            // nine are the same
        // reflectedDiv.setAttribute("style", `background-color: ${Li.dataset.color}`);                             // nine are the same

        // reflectedDiv.style = `background-color: ${window.localStorage.getItem("data-color")}`;  // nine are the same
        // reflectedDiv.style = `background-color: ${window.localStorage["data-color"]}`;          // nine are the same
        // reflectedDiv.style = `background-color: ${Li.dataset.color}`;                           // nine are the same
    }
} );


