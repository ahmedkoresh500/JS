/*
    * promise: [then, catch, finally]
        [1] then      =>> promise resolved    =>> use the data
        [2] catch     =>> promise rejected    =>> catch the error
        [3] finally   =>> promise resolved or rejected, do something

    * [finally] before [then] [catch]
    * [finally] synchronous

    * training:
        [1] we will go to the meeting, promise me that we will find the 4 employees
        [2] .then(two people chosen)
        [3] .then(two people tested one chosen)
        [4] .catch(no one came)
*/


// EX [1]:
let promise1 = new Promise( (resolved, rejected) => {   // [anonymous function] [arrow function]
    let employees = [];                                 // callback function that initializes the promise
    if(employees.length === 4){                         // XHR  =>> onreadystatechange  =>> anonymous function only
        resolved(employees);
    }else{
        rejected( Error("number of employees is not 4 EX [1]") ); // [Error] constructor  =>> change result
    };
} );

console.log(typeof promise1);       // result = object
console.log(promise1);              // result = [promise] object  =>> in a [rejected] state
console.log(`${"#".repeat(30)}\n\n`);       // [synchronous] before [asynchronous]  =>> [then] last thing printed in console
                                            // [finally] = synchronous


promise1.then(
    function(resolvedValue){                // [1] [anonymous function]
        resolvedValue.length = 2;
        console.log(resolvedValue);         // [***] [rejected] applied only
        return resolvedValue;               // [a] promise avoid [callback hell] or [pyramid of doom]
    }                                       // [b] [continuous then] no return = error
)
.then(
    (resolvedValue) => {                    // [2] [arrow function]
        resolvedValue.length = 1;
        return resolvedValue;               // [a] promise avoid [callback hell] or [pyramid of doom]
    }                                       // [b] [continuous then] no return = error
)
.then(
    function(resolvedValue){
        console.log(`the choesn employee is ${resolvedValue} EX [1]`);  // [***] [rejected] applied only
    }
)
.catch( (rejectedReason) => console.log(rejectedReason) )   // [anonymous function] [arrow function]
.finally( console.log(`operation is done EX [1]\n${"#".repeat(30)}\n\n`) );// [finally] before [then] [catch]
/* rejected of EX [1]   =>> at the end   =>> i don't know why */






// [catch] = [rejected] function inside [then]  =>> cancel red error
// console.log(rejectedValue);                  =>> data about error
// console.log(`bad ${rejectedValue}`);         =>> no data about error



// EX [2]:
let promise2 = new Promise( (resolved, rejected) => {       // [anonymous function] [arrow function]
    let employees = ["Ahmed", "Ahmed", "Ahmed", "Ahmed"];   // callback function that initializes the promise
    if(employees.length == 4){
        resolved(employees);
    }else{
        rejected( Error("number of employees is not 4 EX [2]") );   // Error constructor =>> change result
    }
} );

console.log(typeof promise2);       // result = object
console.log(promise2);              // result = [promise] object   =>> in a [fulfilled] state
console.log(`${"#".repeat(30)}\n\n`);       // [synchronous] before [asynchronous]  =>> [then] last thing printed in console
                                            // [finally] = [synchronous]

promise2.then(
    function(resolved){             // [1] [anonymous function]
        resolved.length = 2;
        return resolved;            // promise avoid [callbak hell] or [pyramid of doom]
    },                              // [continuous then] no return = error
)
.then(
    (resolved) => {                 // [2] [arrow function]
        resolved.length = 3;
        console.log(resolved);
    },
    (rejected) => {
        console.log(rejected);                      // [1] resolved applied only
    }
)
.catch(
    (rejected) => console.log(rejected)             // [1] resolved applied only
)
.finally( console.log("operation is done EX [2]") );    // [finally] before [then] [catch]
                                                        // [finally] = synchronous


/* rejected of EX [1]   =>> at the end   =>> i don't know why */


// revision

