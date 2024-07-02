/*
    * assignment [3]: [102:110] [D]
*/


// [1] getting [HTML] elements into variable
let divElement = document.querySelector("div");


// [2] making countDown using [setInterval()]
// way [1]:
let intervalIdentifier = setInterval( () => {
    console.log(divElement.innerHTML);
    if(divElement.innerHTML === "0"){           // must be string  =>> [innerHTML] = string
        clearInterval(intervalIdentifier);
    }else{
        divElement.innerHTML--;
    }
}, 1000 );


/*
// way [2]:
let intervalIdentifier = setInterval(countDown, 1000);

function countDown(){
    console.log(divElement.innerHTML);
    if(divElement.innerHTML === "0"){           // must be string  =>> [innerHTML] = string
        clearInterval(intervalIdentifier);
    }else{
        divElement.innerHTML--;
    }
}
*/


