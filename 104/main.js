/*
    * BOM: [calling function after awhile]

        [1] setTimeout(function(){}, timeout, additional arguments)

            =>> timeout =>> time to wait before function execution
                        =>> milli second  [1 second = 1000 milli second]

        [2] clearTimeout(identifier)        =>> identifier of [setTimeout();]
*/


// EX [1]:
// identifier = 1
setTimeout(function(){          // [anonymous function], [arrow function]
    console.log(`msg from [setTimeout() 1] after [2 seconds]`);
}, 2000);



// EX [2]:
function sayMsg(){
    console.log(`msg from [setTimeout() 2] after [2 seconds]`);
}
// identifier = 2
setTimeout(sayMsg, 2000);       // without parentheses =>> not to called directly
                                // without parentheses =>> not to make syntax error



// EX [3]:
// identifier = 3
function sayHi(User, Age){
    console.log(`Hi ${User}, your age is: ${Age}`);
}
let Counter = setTimeout(sayHi, 2000, "Ahmed", 24); // setTimeout(function(){}, timeout, additional arguments)
// console.log(Counter);                            // [result = 3]


// EX [4]: [clearTimeout();]
let btn = document.querySelector("button");     // by [tagName]     =>> result = first element only
btn.onclick = function(){
    clearTimeout(Counter);                      // identifier = 3
    clearTimeout(2);                            // identifier = 2   =>> not professional
};

/*
    [1] all [addEventListener()] will be executed
    [2] more than one [onclick()] function   =>> last one will be executed
            =>> for one element only
*/