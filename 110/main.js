/*
    * BOM: [scroll-to-top] exercise  =>> using [scrollX, scrollY]

        [1] scrollX = [pageXOffset]         =>> [X] [O] must be uppercase
        [2] scrollY = [pageYOffset]         =>> [Y] [O] must be uppercase

        * [pageXOffset] [pageYOffset]       =>> in old browsers.

        * [scrollX] = [window.scrollX]      = number of pixels i scrolled 
        * [scrollY] = [window.scrollY]      = number of pixels i scrolled 
*/

console.log(window.scrollX === window.pageXOffset);     // result = true

let BtnElement = document.querySelector("button");      // by [tagName]
window.onscroll = function(){                           // without [window.onscroll()]  =>> nothing will happen
    if(scrollY >= 400){                                 // [400 = "400"]    =>> two are the same
                                                        // [px] written = syntax error
        console.log(`scrolling Y value is ${scrollY}`);
        BtnElement.style.display = "block";             // style  =>> camelCase method
    }else{
        BtnElement.style.display = "none";
    }
};

// more than one [onclick] function  =>> last one will be executed
// =>> for one element only
BtnElement.onclick = function(){
    window.scrollTo(0, 0);          // [1] two are the same
                                    // [**] [px] written = syntax error
    /*
    window.scrollTo({               // [1] two are the same
        left: 0,                    // [**] [px] written = syntax error
        top: 0,
        behavior: "smooth"
    });
    */
};



/*
    [**] window.onload = function(){};
    [**] window.location.reload();

    [1] [window.stop();]        =>> stop loading webpage resources
    [2] [window.focus();]
    [3] [window.print();]       =>> [right click + print] [ctrl + p]

    [4] [window.onload]
    [5] [window.onscroll]
*/

