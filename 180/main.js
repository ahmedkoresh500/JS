/*
    * promise intro and syntax:
        [1] promise in JS like a promise in real life
        [2] promise is something that will happen in the future
        [3] promise avoid [callback hell] or [pyramid of doom]
        [4] promise  =>> object that represents [asynchronous operation] and its resulting value

    * promise status:
        [1] pending:    =>> initial state
        [2] resolved:   =>> fulfilled
        [3] rejected:

    * story:
        [1] once a promise has been called, it's in a [pending] state
        [2] promise eventually ends in a resolved state or a rejected state
        [3] calling callback function (passed to then and catch) upon finishing

    * [then()] method:  =>> accepts 2 optional arguments [callback for success or failure]


    * [promise]                 =>> result = promise    =>> [anonymous function] [arrow function]
    * [Ajax] [XMLHttpRequest]   =>> result = object     =>> [anonymous function]  [arrow function] = syntax error
*/





const promise1 = new Promise( function(resolvedFunc, rejectFunc){   // [anonymous function] [arrow function]
    let connect = true;                                             // callback function that initializes the promise
    if(connect){                                                    // XHR  =>> onreadystatechange  =>> anonymous function
        resolvedFunc("connection established [1]");
    }else{
        rejectFunc( Error("connection failed [1]") );     // Error constructor  =>> change result
    };
} )
.then(
    function(resolvedValue){                    // [1] [anonymous function]
        console.log(`Good ${resolvedValue}`)
    },
    (rejectedValue) => {                        // [2] [arrow function]
        console.log(`Bad ${rejectedValue}`);
    }
);


console.log(typeof promise1);       // result = object
console.log(promise1);              // result = [promise] object    =>> in a [pending] state
console.log(`${"#".repeat(30)}\n\n`);   // [synchronous] before [asynchronous]  =>> [then] last thing printed in console



// [catch] = [rejected] function inside [then]      =>> cancel red error
// console.log(`${rejectedValue}`);                 =>> data about error
// console.log(`bad ${rejectedValue}`);             =>> no data about error

//////////////////////////////////////////////////////////


let promise2 = new Promise( (resolvedFunc, rejectedFunc) => {   // [anonymous function] [arrow function]
    let connect = false;                                        // callback function that initializes the promise
    if(connect){                                                // XHR  =>> onreadystatechange  =>> anonymous function only
        resolvedFunc("connection established [2]");
    }else{
        rejectedFunc( Error("connection failed [2]") );
    };
} );


console.log(typeof promise2);       // result = object
console.log(promise2);              // result = [promise] object  =>> in a [rejected] state
console.log(`${"#".repeat(30)}\n\n`);   // [synchronous] before [asynchronous]  =>> [then] last thing printed in console


promise2.then(
    function (resolvedValue){                   // [1] anonymous function
        console.log(`Good ${resolvedValue}`);
    },
    (rejectedValue) => {                        // [2] arrow function
        console.log(`Bad ${rejectedValue}`);
    }
);





// revision

let promise3 = new Promise( function(resolved, rejected){   // [anonymous function] [arrow function]
    let connect = true;                                     // callback function that initializes the promise
    if(connect){
        resolved("connection established [3]");
    }else{
        rejected(Error("connection failed [3]"));
    };
} );

console.log(typeof promise3);       // result = object
console.log(promise3);              // result = [promise] object  =>> in a [fulfilled] state

setTimeout( function(){             // [anonymous function] [arrow function]
    console.log(typeof promise3);   // result = object
    console.log(promise3);          // result = [promise] object    =>> in a [fulfilled] state
}, 1000 );

setTimeout( function(){
    promise3.then(
        function (resolved){        // [1] [anonymous function]
            console.log(`Good ${resolved}`);
        },
        (rejected) => {             // [2] [arrow function]
            console.log(`Bad ${rejected}`);
        }
    );
},1000 );



