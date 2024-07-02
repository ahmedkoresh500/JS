/*
    * assignment [3]: [94:101] [D]
*/


// [1] selecting HTML elements
let divElement = document.querySelector("div");
let pElement = document.querySelector("p");

// [2] remove [p] element from DOM tree
pElement.remove();

// [3] create two divs
let createdDiv1 = document.createElement("div");
let createdDiv2 = document.createElement("div");


// [3] add [class] attribute to created two divs
createdDiv1.classList.add("start");
createdDiv2.classList.add("end");


// [4] add [title] attribute to created two divs
createdDiv1.title = "Start Element";                // add two values  =>> one time
createdDiv2.setAttribute("title", "End Element");   // add two values  =>> one time


// [5] add [dataset attribute] [custom attribute] to the [two created divs]
createdDiv1.dataset.value = "Start";
createdDiv2.dataset.value = "End";



// [6] add [innerHTML] to [two created divs] by two ways
// way [1]:
createdDiv1.innerHTML = "Start";
createdDiv2.innerHTML = "End";

// way [2]
let text1 = document.createTextNode("Start");
let text2 = document.createTextNode("End");

// [7] appending [text node] into [two created divs]
createdDiv1.appendChild(text1);
createdDiv2.appendChild(text2);



// [8] add [two created divs] directly before and after [divElement]
divElement.before(createdDiv1);
divElement.after(createdDiv2);