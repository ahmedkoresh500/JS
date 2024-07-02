/*
    * BOM: [challenge]: [To-Do-List]

    * HTMLelement.innerHTML.length;
    * input.value.length;               =>> [v] of [value] must be lowercase
                                        =>> [l] of [length] must be lowercase

    [a] window.locaslStorage.setItem('tasks', '[]');    
                                                        =>> '[]'  =>> to create array in [localStorage]
                                                        =>> without [']  = syntax error

    [b] stored_array = JSON.parse(window.localStorage.getItem('tasks') )
                                    =>> [JSON.parse()]  =>> convert JSON object to JS object

    [c] window.localStorage.setItem('tasks', JSON.stringify(stored_array) )
                                    =>> [JSON.stringify()]  =>> convert JS object to JSON object
*/


let InputEle = document.querySelector('.input');    // calling class with [.]   =>> same calling like CSS
let InputSubmit = document.querySelector('.add');   // calling id with [#]      =>> same calling like CSS
let TaskDiv = document.querySelector('.tasks');



// function =>> to create [item] divs  =>> and put [array] data into them  =>> when append data from [localStorage]
function Create_Append_data(ID, ArrayValue){
    CreatedDiv = document.createElement('div');
    CreatedDiv.id = ID;
    CreatedDiv.classList.add('item');

    CreatedP = document.createElement('p');
    CreatedP.innerHTML = ArrayValue;

    CreatedInput = document.createElement('input');
    CreatedInput.type = "submit";
    CreatedInput.name = ID;
    CreatedInput.value = "Delete";
    CreatedInput.classList.add('delete');

    TaskDiv.appendChild(CreatedDiv);
    CreatedDiv.appendChild(CreatedP);
    CreatedDiv.appendChild(CreatedInput);
}


// function  =>> to delete [item] div in the browser  =>> & from [array] in localStorage
function Delete(wholeInputs){
    wholeInputs.forEach(Inp => {
        //console.log(Inp);                // [input] instead of [inp] = syntax error
        Inp.onclick = function(){

            // [1] getting [id]  =>> from [class] value  =>> of [item] div
            let InputID = Inp.name;

            // [2] getting array from [localStorage]
            let array = JSON.parse( window.localStorage.getItem('tasks') );

            // [3] deleting specific item from the array    >>>>>>>>>>>>>>>>>>>>>>>>>>
            array.splice(InputID, 1);                       // [1] = delete one element

            // [4] updating array [tasks] in [localStorage]
            window.localStorage.setItem('tasks', JSON.stringify(array));

            // [5] deleting [item] div from the browser
            CreatedDiv = document.getElementById(InputID);
            CreatedDiv.remove();

            // [6] updating [id] for each [item] div  =>> & [delete] input after deleting specific item in the browser
            createdDivs = document.querySelectorAll('.item');
            let i = 0;
            createdDivs.forEach(function(everySingleCreatedDiv){
                everySingleCreatedDiv.id = i;
                i++;
            })

            i = 0;
            createdInputs = document.querySelectorAll('.delete');
            createdInputs.forEach(function(everySingleCreatedInput){
                everySingleCreatedInput.name = i;
                i++;
            })
        }
    })
}



// check if [localStorage] contains [tasks] key
if( !window.localStorage.getItem('tasks') ){
    window.localStorage.setItem('tasks', '[]');     // '[]' =>> to create array in localStorage
}else{                                              // without [']  =>> syntax error
    let arrayData = JSON.parse(window.localStorage.getItem('tasks'));
    for(let i=0 ; i<arrayData.length ; i++){
        Create_Append_data(i, arrayData[i]);
    }
    /*
        [1] when opening the browser  =>> [Delete();] function called
        [2] when adding new item      =>> [Delete();] function called  
            =>> executed only one time  =>> cauz of using [onclick();] event
    */
    let wholeInputs = document.querySelectorAll('.delete');                  // [1] first time
    Delete(wholeInputs);                                                     // [1] first time
}




InputSubmit.onclick = function(){
    // checking input is empty or not
    if(InputEle.value !== ""){
        // [1] getting data from input =>> then storing it into variable [InputData]
        InputData = InputEle.value;

        // [2] getting data of key [tasks] from [localStorage] and puting it into variable [arrayData]
        let arrayData = JSON.parse( window.localStorage.getItem('tasks') );

        // [3] when adding new item to be printed in the webpage
        Create_Append_data(arrayData.length, InputData);         // [arrayData.length = 0] =>> first element

        // [4] push  =>> add element at the end
        arrayData.push(InputData);

        // [5] updating value of [tasks] key in [localStorage]
        window.localStorage.setItem('tasks', JSON.stringify(arrayData) );

        // [6] making input empty after taking it's value
        InputEle.value = "";
    }

    let wholeInputs = document.querySelectorAll('.delete');                            // [2] second time
    Delete(wholeInputs);                                                               // [2] second time
}



/*
    [1] all [addEventListener();] will be executed
    [2] more than one [onclick();] function  =>> last one will be executed   
    =>> for one element only

    * [Delete()] function called two times
        =>> executed only one time  =>> cauz of using [onclick();] event
*/


