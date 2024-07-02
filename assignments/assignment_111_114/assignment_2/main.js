/*
    * assignment [2]: [111:114] [D]

    * select.options            =>> result = [HTMLOptionCollection] array
    * select.children           =>> result = [HTMLCollection] array
    * select.selectedIndex      =>> result = [option index]  =>> with [selected] attribute

    * can't loop on  [2] select.children  [1] select.options      =>> using forEach directly
        [1] [...select.options]
        [2] Array.from(select.options)
        [3] new Array(...select.options)

        [4] .split(" ")                             // 5 ways  =>> to get array from string
        [5] Object.assign([], theNameString);       // 5 ways  =>> to get array from string
*/


// [1] creating array contains [inputs id]
let elementsId = ["firstName", "lastName", "jobTitle", "color"];

// [2] loop on [inputs id] array
elementsId.forEach( (id) => {

    // [3] check [id] related to [input] or [select]
    if(id === "color"){
        // [4] get HTML element with that [id]
        let selectElement = document.getElementById(`${id}`);

        // [5] calling anonymous function when changing [select option]
        selectElement.onchange = function(){

            // [6] calling function to remove [selected] attribute from all options
            removeSelectedClass(selectElement);

            // [7] add [selected] attribute to selected [option]
            selectElement.options[selectElement.selectedIndex].setAttributeNode(document.createAttribute("selected"));
            
            // [8] store value of [option] selected in [sessionStorage]
            window.sessionStorage.setItem(id, selectElement.options[selectElement.selectedIndex].value); // value attribute
                                                                                                         // not innerHTML
        }
    }else{

        // [9] get [input] element with specified [id]
        let htmlInput = document.getElementById(`${id}`);

        // [10] calling anonymous function  =>> when changing input value
        htmlInput.oninput = function(){
            // [11] storing [input value] into [sessionStorage] during changing
            window.sessionStorage.setItem(id, htmlInput.value);
        };
    }
} );


// [12] calling anonymous function  =>> when loading webPage
window.onload = function(){
    // [13] loop on [inputs id] from array created before
    elementsId.forEach( (id) => {
        // [14] check [input id] identical to [color id]
        if(id === "color"){

            // [15] get [input] html element from it's specific [id]
            let selectElement = document.getElementById(`${id}`);

            // [16] calling [removeSelectedClass] function to remove [selected] attribute from all select options
            removeSelectedClass(selectElement);

            // [17] getting [option] element that has dataset color like that in the [sessionStorage]
            let selectedOption = document.querySelector(`form div select [data-color=${sessionStorage.getItem(id)}]`);
            
            // [18] assigning [selected] attribute to that otpion
            selectedOption.setAttributeNode( document.createAttribute("selected") );
        }else{

            // [19] getting [input] element from it's specific [id]
            let htmlInput = document.getElementById(id);

            // [20] assigning [value] to [input] element stored before in [sessionStorage]
            htmlInput.value = window.sessionStorage.getItem(id);
        }
    } );
}


// [21] creating function to remove [selected] attibute from [select] element
function removeSelectedClass(selectElement){

    // [22] getting array from [HTMLOptionCollection] array =>> [three ways]
    let optionsArray = [...selectElement.options]                   // three are the same
    // let optionsArray = Array.from(selectElement);                // three are the same
    // let optionsArray = new Array(... selectElement.options);     // three are the same
    
    // [23] loop on [select options] to remove [selected] attribute
    optionsArray.forEach( (option) => {
        // [24] removing option [selected] attibute
        option.removeAttribute("selected");
    } );
};


