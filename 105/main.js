/*
    * BOM: [calling function after a while]
            =>> then wait a period before next call

        
    [1] setInterval(function(){}, timeout, additional arguments)

        =>> timeout =>> time to wait before function execution
                    =>> milli second  [1 second = 1000 milli second]

    [2] clearInterval(identifier)   =>> identifier of [setInterval();]

    * [I] of [Interval]  =>> must be uppercase
*/



/*
// EX [1]:
setInterval(function(){         // [anonymous function] [arrow function]
    console.log(`this msg from [setInterval() 1]`);
}, 2000);
*/


/*
// EX [2]:
function sayHi(){
    console.log(`this msg from [setInterval() 2]`);
};
setInterval(sayHi, 2000);       // without parentheses  =>> not to called directly
                                // without parentheses  =>> not to make syntax error
*/


/*
// EX [3]:
function sayWelcome(name, Age){
    console.log(`welcome ${name}, your age is: ${Age}`);
};
setInterval( sayWelcome, 2000, "Ahmed", 24);    // without parentheses  =>> not to called directly
                                                // without parentheses  =>> not to make syntax error
*/


// EX [4]:
let divElement = document.querySelector("div");     // by [tagName]     =>> result = first element only

function countdown(){
    console.log(divElement.innerHTML);
    if(divElement.innerHTML === "0"){               // [0] = ["0"]  =>> two are the same
        clearInterval(intervalIdentifier);
    }else{
        divElement.innerHTML--;                     // last value = [0]
    }
};

let intervalIdentifier = setInterval(countdown, 2000);  // without parentheses  =>> not to called directly
                                                        // without parentheses  =>> not to make syntax error


/*
// revision
let intervalIdentifier = setInterval(countDown, 1500);
function countDown(){
    console.log(divElement.innerHTML);
    if(divElement === "0"){
        clearInterval(intervalIdentifier);
    }else{
        divElement.innerHTML--;
    }
}
*/