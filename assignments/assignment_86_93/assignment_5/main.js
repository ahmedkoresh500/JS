/*
    * assignment [5]: [86:93] [D]
*/

let images = document.images;

for(let i=0 ; i<images.length ; i++){
    console.log(images[i]);

    if(images[i].alt != ""){                    // [2] not empty    =>> two are the same
    // if(images[i].alt)                        // [1] full         =>> two are the same
        images[i].alt = "Old";
    }else{
        images[i].alt = "Elzero New";
    }

    images[i].style.display = "block";
}