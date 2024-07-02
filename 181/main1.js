/*
    * promise: [then, catch, finally]
        [1] then      =>> promise resolved    =>> use the data
        [2] catch     =>> promise rejected    =>> catch the error
        [3] finally   =>> promise resolved or rejected, do something

    * [finally] before [then] [catch]
    * [finally] synchronous
*/

let promise1 = new Promise( (resolved, rejected) => {       // [anonymous function] [arrow function]
    let employees = ["Osama", "Ahmed", "Sayed", "Mahmoud"]; // callback function that initializes the promise
    if(employees.length === 4){
        resolved(employees);
    }else{
        rejected( Error("number of employees is not 4") );      // Error constructor  =>> change result
    };
} );


console.log(typeof promise1);       // result = object
console.log(promise1);              // result = [promise] object   =>> in a [fulfilled] state
console.log(`${"#".repeat(30)}\n\n`);       // [synchronous] before [asynchronous]  =>> [then] last thing printed in console

promise1.then(
    function(resolvedValue){            // [1] [anonymous function]
        resolvedValue.length = 2;       // [Sayed], [Mahmoud]  =>> deleted
        console.log(resolvedValue);
        return resolvedValue;           // [a] promise avoid [callback hell] or [pyramid of doom]
    }                                   // [b] [continuous then] no return = error
);

promise1.then( 
    (resolvedVal) => {                  // [2] [arrow function]
        resolvedVal.length = 1;         // [Ahmed]  =>> deleted
        return resolvedVal;             // [a] promise avoid [callback hell] or [pyramid of doom]
    }                                   // [b] [continuous then] no return = error
);

promise1.then(
    function(resolvedValue){            // [anonymous function] [arrow function]
        console.log(resolvedValue);         // result = ['osama']
        console.log(resolvedValue[0]);      // reult = osama
        console.log( `the choesn employee is: [${resolvedValue}]` );        // two are the same
        console.log( `the choesn employee is: [${resolvedValue[0]}]` );     // two are the same
    }
);


// revision

