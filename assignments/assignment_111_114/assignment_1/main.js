/*
    * assignment [1]: [111:114] [D]

    * select.options            =>> result = [HTMLOptionCollection] array
    * select.children           =>> result = [HTMLCollection] array
    * select.selectedIndex      =>> result = [option index]  =>> with [selected] attribute

    * can't loop on  [2] select.children  [1] select.options      =>> using forEach directly
        [1] [...select.options]
        [2] Array.from(select.options)
        [3] new Array(...select.options)

        [4] .split(" ")                             // 5 ways  =>> to get array from string
        [5] Object.assign([], theNameString);       // 5 ways  =>> to get array from string

    * algorithm of doing the program:
        [1]
        [2]
        [3]
*/


// [1] define array contains [name] attribute values for each select
let LArray = ["favFont", "favColor", "favFontSize"];


// [2] getting [select] elements from HTML page
let selectElements = document.querySelectorAll("div select");       // by [tagName]  result = nodelistArray


// [3] calling anonymous function when loading the webpage
window.onload = function(){

    // [4] loop on array when contains [name] attribute values for each select
    LArray.forEach( (selectName) => {

        // [5] check [name] attribute value exists in localStorage
        if(window.localStorage[`${selectName}`]){

            // [6] calling function that removes [selected] attribute from [options] of [select]
            removeSelectedAttribute(selectName);

            // [7] get [option] element from HTML page =>> which has [dataset] attribute value like that in [localStorage] object
            let selectedOption = document.querySelector(`div select option[data-${selectName}='${window.localStorage.getItem(selectName)}']`);
                                                            // ['] is a must  =>> especially with number
            // [8] giving [selected] attribute to [option] element i got above
            selectedOption.setAttributeNode( document.createAttribute("selected") );  // [setAttribute("", "")]  =>> doesn't work
        }
    } );
}


// [9] loop on [select] elements from HTML page
selectElements.forEach( (select) => {       // reult = whole HTML file code
    // console.log(select.tagName);         // result = HTML element tagName

    // [10] calling anonymous function when changing [select] selected [option]
    select.onchange = function(event){
        // console.log(select.options[select.selectedIndex].value);                 // [vlue] of [option]
        // console.log(event.target.options[event.target.selectedIndex].innerHTML); // not innerHTMl

        // [11] calling function that removes [selected] attribute from [options] of specific [select]
        removeSelectedAttribute(select.name);

        // [12] getting [option] element that the user selected
        let selectedOption = select.options[select.selectedIndex];

        // [13] assign [option] element value  =>> to localStorage object specific key
        window.localStorage.setItem(select.name, selectedOption.value);

        // [14] assign [selected] attribute to [option] element we got above
        selectedOption.setAttributeNode(document.createAttribute("selected"));
    }
} );


// [15] create [removeSelectedAttribute()] function  =>> to remove [selected] attribute from options
function removeSelectedAttribute(selectName){

    // [16] getting specific [select] element by [id]
    let select = document.querySelector(`#${selectName}`);
    // console.log(select);                 // result = [select] element
    // console.log(select.options);         // result = [HTMLOptionCollection] array
    // console.log(select.children);        // result = [HTMLCollection] array

    // [17] getting array from [select options]
    // can't loop on  [2] select.children  [1] select.options      =>> using forEach directly
    let optionsArray = Array.from(select.options);

    // [18] loop on array from [select options]
    optionsArray.forEach( (option) => {

        // [19] remove [selected] attribute from [select options]
        option.removeAttribute("selected");
    } );
};


/*
// can't loop on  [1] select.children  [2] select.options      =>> using forEach directly
    let options = favFontSelectEle.children;
    options.forEach( (ele) => {
        console.log(ele);
    } );
*/


