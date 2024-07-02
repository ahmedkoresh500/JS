/*
    * assignment [4]: [102:110] [D]
*/


// [1] getting [HTML] elements into variables
let divElement = document.querySelector("div");


// [2] making countDown using [setInterval()]
// way [1]:
let intervalIdentifier = setInterval( () => {
    console.log(divElement.innerHTML);
    if(divElement.innerHTML === "0"){                   // ["0"] must be string  =>> [innerHTML] = string
        clearInterval(intervalIdentifier);
        window.location.href = ("https://elzero.org");  // go to website [https://elzero.org]
    }else{                                              // if [www.elzero.org] or [https://www.elzero.org]
        divElement.innerHTML--;                         // = syntax error
    }
}, 1500 );


/*
// way [2]:
let intervalIdentifier = setInterval(countDown, 1000);

function countDown(){
    console.log(divElement.innerHTML);
    if(divElement.innerHTML === "0"){           // must be string  =>> [innerHTML] = string
        clearInterval(intervalIdentifier);
        window.location.href = ("https://elzero.org");
    }else{
        divElement.innerHTML--;
    }
}
*/


