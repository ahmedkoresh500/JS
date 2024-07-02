/*
    * assignment [2]: [94:101] [D]
*/


let inputOneAdding = document.querySelector(".classes-to-add");
let inputTwoRemoving = document.querySelector(".classes-to-remove");
let currentDiv = document.querySelector(".current");
let showDiv = document.querySelector(".assign .classes-list div");
let classesArray = [];


// [1] calling anonymous function when blur from [inputOneAdding] element
inputOneAdding.onblur = function () {

    // [2] checking [inputOneAdding] element value full [not empty]
    if (inputOneAdding.value) {      // [1] full   [2] not empty [if(inputOneAdding.value != "")]  =>> two are the same

        // [3] looping on [classesArray] added before
        classesArray.forEach((c) => {

            // [4] deleting [classes] added before from [.current] div  =>> to be added later  =>> after modification
            currentDiv.classList.remove(c);
        });

        // [5] deleting classes from [showDiv] element  =>> to be added later  =>> after modification
        showDiv.innerHTML = "";


        // [6] getting classes from [inputOneAdding] element into variable  =>> after modifying it
        let classesFromInputAdding = Array.from(inputOneAdding.value.toLowerCase().split(" ")); // way [1] two are the same
        // let classesFromIjputAdding = [... inputOneAdding.value.toLowerCase().split(" ")];      // way [2] two are the same

        // [7] loop on new [classes] user entered  =>> after modification
        classesFromInputAdding.forEach(function (c) {

            // [8] comparing [new classes] with [old classes]  =>> not to repeated
            if (!classesArray.includes(c)) {
                // [9] add new [classes] to the array
                classesArray.push(c);
            }

        });

        // [10] sorting [old] [new] classes alphabetically
        classesArray.sort();

        // [11] looping on [old] [new] classes
        classesArray.forEach((c) => {

            // [12] add [old] [new] classes to [currentDiv] element
            currentDiv.classList.add(c);

            // [13] create [span] for each [old] [new] class found
            let createdSpan = document.createElement("span");

            // [14] appending [old] [new] class value into [createdSpan] as [innerHTML]
            createdSpan.innerHTML = c;

            // [15] appending [createdSpan] into [showDiv] element
            showDiv.appendChild(createdSpan);

        });

        // [16] empting [inputOneAdding] element onblur
        inputOneAdding.value = "";
    }
}




// [17] calling anonymous function when blur from [inputTwoRemoving] element
inputTwoRemoving.onblur = function () {

    // [18] check [inputTwoRemoving] element value  =>> full [not empty]
    if (inputTwoRemoving.value != "") {     // [2] not empty    =>> two are the same
        // if(inputTwoRemoving.value){      // [1] full         =>> two are the same

        // [19] check [classesArray] is full [not empty]
        if (classesArray != "") {           // [2] not empty    =>> tw oare the same
         // if(classesArray){               // [1] full         =>> two are the same

            // [20] getting [inputTwoRemoving] element values into variable  =>> after modifcation
            let classesFromInputRemoving = [...inputTwoRemoving.value.toLowerCase().split(" ")];            // way [1] two are the same
            // let classesFromInputRemoving = Array.from( inputTwoRemoving.value.toLowerCase().split(" ") ); // way [2] two are the same


            // [21] selecting [createdSpans] elements inside [showDiv] element
            let spansCreatedInsideShowDiv = document.querySelectorAll(".assign .classes-list div span");

            // [22] loop on [classesFromInputRemoving]
            classesFromInputRemoving.forEach((c) => {

                // [23] check class to be removed is in [classesArray] 
                if (classesArray.includes(c)){

                    // [24] remove class to be removed from [classesArray]
                    classesArray.splice(classesArray.indexOf(c), 1);

                    // [25] loop on [createdSpans] inside [showDiv] element
                    spansCreatedInsideShowDiv.forEach((s) => {

                        // [26] check created [span.innerHTML = class] to be removed
                        if (s.innerHTML === c) {
                            // [27] remove span with [innerHTML = class] to be removed
                            s.remove();                                 // remove from [DOM] tree

                            // [28]  remove class from [currentDiv] element
                            currentDiv.classList.remove(c);
                        }
                    });
                }

            });

        }

        // [29] check [showDiv] element is empty
        if (showDiv.innerHTML == "") {                // two are the same
            // if(classesArray.length == 0){           // two are the same

            // [30] add [`No Classes To Show`] value to [showDiv] element   =>> if empty
            showDiv.innerHTML = `No Classes To Show`;
        }

        // [31] empting [inputTwoRemoving] value onblur
        inputTwoRemoving.value = "";
    }
}


/*
    [1] [... string.toLowerCase().split(" ")]         =>> two are the same  =>> convert [string] into [array]
    [2] Array.from(string.toLowerCase().split(" "));  =>> two are the same  =>> convert [string] into [array]

    * toLowerCase()     =>> parentheses is a must
    * split(" ")        =>> parentheses is a must
*/