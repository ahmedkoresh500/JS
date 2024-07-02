/*
    * preferable to review:
        [1] Lesson [77] : forEach( callBackFunction(element, index, array){}, this argument )
        [2] Lesson [100]: addEventListener("click", function(event){})

    * BOM: [localStorage] color-Application-Exercise

    * search on google:
        [1] currentTarget
        [2] dataset                     =>> custom attribute

    * target : HTML element that triggered the event (user clicked on)
    * currentTarget: HTML element that EventListener is attached to.
*/


// window.localStorage.clear();


// getting HTML elements
let Lis = document.querySelectorAll("ul li");                   // by [tagName]
let reflectedDiv = document.querySelector(".reflected-color");  // calling class with [.]  =>> same calling like CSS
                                                                // calling [id] with [#]   =>> same calling like CSS

// [2] check [color] key found in localStorage when loading webpage
if( window.localStorage.getItem("color") ){             // three are the same
 // if( window.localStorage.color ){                    // three are the same
 // if( window.localStorage["color"] ){                 // three are the same

    // [3] assign localStorage [background-color] to [reflectedDiv]
    reflectedDiv.style.backgroundColor = window.localStorage.getItem("color"); // camelCase method  =>> three are the same
    // reflectedDiv.style.backgroundColor = window.localStorage.color;         // camelCase method  =>> three are the same
    // reflectedDiv.style.backgroundColor = window.localStorage["color"];      // camelCase method  =>> three are the same
    
    // [4] remove [active] class from [ul Lis]
    Lis.forEach((li) => {
        li.classList.remove("active");
    });

    // [5] getting [ul li] element that have color = [localStorage color] through [data-color="color"] attribute
    let correctLi = document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`);

    // [6] add [active] class to [ul li] element
    correctLi.classList.add("active");
}


// [7] when click on specific [ul li]
Lis.forEach((li) => {
    li.addEventListener("click", (event) => {
        //console.log(event.target.dataset.color);

        // [8] remove [active] class from [ul Lis]
        Lis.forEach((li) => {
            li.classList.remove("active");
        });

        // [9] add [active] class to clicked [ul li] element
        event.target.classList.add("active");

        // [10] add [ul li] clicked color to localStorage
        window.localStorage.setItem("color", event.target.dataset.color);

        // [11] change [reflectedDiv] background-color to clicked [ul li] color
        reflectedDiv.style.backgroundColor = window.localStorage.getItem("color");  // two are the same
        // reflectedDiv.style.backgroundColor = event.target.dataset.color;         // two are the same
    });
})


