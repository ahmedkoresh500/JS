/*
    * assignment [6]: [86:93] [D]
*/

let form = document.forms[0];
let resultsDiv = document.querySelector(".results");        // calling class with [.]

form.onsubmit = function(){

    // [1] empting [resultsDiv] element when submit form
    resultsDiv.innerHTML = "";

    // [2] getting 3 inputs data
    let inputOneValue = document.forms[0].elements.value;
    let inputTwoValue = document.forms[0].texts.value;
    let inputThreeValue = document.forms[0].type.value;

    // [3] loop to create [number] and [type] of elements i selected
    for(let i=1 ; i<= inputOneValue ; i++){
        let createdElement = document.createElement(inputThreeValue);
        createdElement.className = "box";
        createdElement.title = "element";
        createdElement.id = `id-${i}`;
        createdElement.innerHTML = inputTwoValue;

        resultsDiv.appendChild(createdElement);
    }

    // [4] form return false  =>> not to send data
    return false;
}