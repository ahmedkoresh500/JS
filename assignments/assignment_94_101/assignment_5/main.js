/*
    / assignment [5]: [94:101] [D]
*/

document.addEventListener("click", (event) => {
    console.log(event.target.tagName);                  // result = HTML element tagName
});

document.addEventListener("click", (event) => {
    console.log(event.currentTarget);                   // result = whole HTML file code
});