/*
    * assignment [3]: [86:93] [D]

    * secret  =>> [onchange] [oninput] events

        [1] onchange    =>> effect  =>> on blur
        [2] oninput     =>> effect  =>> when standing inside input   =>> and change data
*/


let dollarInput = document.forms[0].dollar;                 // calling inputs by [name] attribute
let elementDiv = document.querySelector(".result");         // calling class with [.]
let dollarInputValue;

function change(){
    dollarInputValue = document.forms[0].dollar.value;      // calling inputs by [name] attribute

    elementDiv.innerHTML = `{${dollarInputValue}} USD Dollar = {${dollarInputValue * 31}} Egyptian Pound`;
};


// dollarInput.oninput = change;    // without parentheses  =>> not to called directly
                                    // without parentheses  =>> not to make syntax error
                                    // here or from [index.html]

