/*
    * assignment [2]: [102:110] [D]
*/


// [1] getting [HTML elements] into [variables]
let parentDiv = document.querySelector("div.parent");
let closeElement = document.querySelector("p.close");


// [2] [pop-up] appears after passing of 5 seconds
setTimeout( function(){
    parentDiv.style.visibility = "visible";
    console.log("5 seconds passed");
}, 5000 );


// [3] remove [pop-up] from DOM tree when clicking [close] button
// way [1]:
closeElement.onclick = function(event){
    event.target.parentElement.remove();            // two are the same
    closeElement.parentElement.remove();            // two are the same
};


/*
// way [2]:
closeElement.addEventListener("click", function(event){
    event.target.parentElement.remove();            // two are the same
    closeElement.parentElement.remove();            // two are the same
});
*/


