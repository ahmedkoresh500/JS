/*
    * assignment [5]: [102:110] [D]
*/


// [1] getting [HTML] elements into variables
let divElement = document.querySelector("div");


// [2] making countDown using [setInterval()]
// way [1]:
let intervalIdentifier = setInterval( () => {
    console.log(divElement.innerHTML);
    if(divElement.innerHTML === "5"){                   // ["0"] must be string  =>> [innerHTML] = string
        window.open("https://elzero.org", "_blank", "width=700, height=500, top=100, left=300");
    };

    if (divElement.innerHTML === "0"){
        clearInterval(intervalIdentifier);
    }else{
        divElement.innerHTML--;
    }
}, 1200 );


/*
// way [2]:
let intervalIdentifier = setInterval(countDown, 1000);

function countDown(){
    console.log(divElement.innerHTML);
    if(divElement.innerHTML === "5"){                   // ["0"] must be string  =>> [innerHTML] = string
        window.open("https://elzero.org", "_blank", "width=700, height=500, top=100, left=300");
    };

    if (divElement.innerHTML === "0"){
        clearInterval(intervalIdentifier);
    }else{
        divElement.innerHTML--;
    }
}
*/


