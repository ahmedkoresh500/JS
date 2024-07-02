/*
    * assignment [2]: [86:93] [D]

    * src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
    * alt = "Elzero Logo"
*/

let elementImages = document.querySelectorAll("img");

console.log(elementImages);

for (let i=0 ; i<elementImages.length ; i++){
    elementImages[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";

    elementImages[i].alt = "Elzero Logo";                      // two are the same
    elementImages[i].setAttribute("alt", "Elzero Logo");       // two are the same
}
