/*
    * DOM: [events]
        [1] Element.onclick

        [2] Element.onfocus      =>> when standing inside input  =>> الحقل
        [3] Element.onblur       =>> when standing outside input =>> الحقل
        [4] Element.onsubmit     =>> to test data from client side  =>> before backend requests
        
    *  DOM: [event] simulation   =>> to the above
        [1] Element.focus()
        [2] Element.blur()
        [3] Element.click()
*/



let InputOne = document.querySelector(".one");          // calling class with [.] =>> same calling like CSS
let InputTwo = document.querySelector("[name='Age']");  // by [Attributes]


window.onload = function(){
    InputOne.focus();
}

InputTwo.onblur = function(){                   // anonymous function
    document.links[0].click();
}


/*
    * real examples based on [.focus()] [.Blur()]:
        [1] inputs filled by one character during verification
        [2] when copy serial number  =>> paste it in inputs accept one character
*/


