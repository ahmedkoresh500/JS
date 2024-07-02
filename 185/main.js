/*
    * [async] before function   =>> function return a promise
    * [async] and [await]       =>> help in creating [asynchronous promise behavior] in a clean style
*/


// EX [1]:
function getData1(){
    return new Promise( (resolved, rejected) => {   // [anonymous function] [arrow function]
        let users = ["Osama"];                      // callback function that initializes the promise
        if(users.length > 0){                       // XHR  =>> onreadystatechange  =>> anonymous function only
            resolved("users are found [1]");
        }else{
            rejected( Error("users are not found [1]") );
        };
    } );
};


                                        // [synchronous] before [asynchronous]
console.log(getData1());                // result = [promise] object    =>> in a [resolved] state
let promise1 = getData1();
console.log(promise1);                  // result = [promise] object    =>> in a [fulfilled] state
console.log(`${"#".repeat(30)}\n\n`);   // result = [promise] object    =>> in a [pending] state  =>> [182] same case
                                                                                                        // difference [XHR] [Ajax]

promise1.then(
    function(resolvedValue) {                   // [1] [anonymous function]
        console.log(resolvedValue);
    },
    (rejectedValue) => {                        // [2] arrow function
        console.log(rejectedValue);
    }
);






// EX [2]:
function getData2(){
    let users = ["Ahmed"];
    if(users.length > 0){
        return Promise.resolve("users are found [2]");      // [built-in] function
    }else{
        return Promise.reject("users are not found [2]");   // [built-in] function
    };
};


console.log(getData2());                // result = [promise] object    =>> in a [resolved] state
let promise2 = getData2();                      
console.log(promise2);                  // result = [promise] object    =>> in a [fulfilled] state
console.log(`${"#".repeat(30)}\n\n`);   // result = [promise] object    =>> in a [pending] state  =>> [182] same case
                                                                                                        // difference [XHR] [Ajax]

promise2.then(
    function(resolvedValue){                // [1] [anonymous function]
        console.log(resolvedValue);
    },
    (rejectedValue) => {                    // [2] [arrow function]
        console.log(rejectedValue);
    }
);




// EX [3]:
async function getData3(){              // [async] before function  =>> function return a promise
    // let users = [];                  // empty array
    let users = [""];                   // not empty array
    if(users.length > 0){
        return "users are found [3]";
    }else{
        // return "users are not found [3]";
        throw new Error("users are not found [3]");     // new rejection Error way
    };
};


                                        // [synchronous] before [asynchronous]
console.log(getData3());                // result = [promise] object    =>> in a [resolved] state
let promise3 = getData3();
console.log(promise3);                  // result = [promise] object    =>> in a [fulfilled] state
console.log(`${"#".repeat(30)}\n\n`);   // result = [promise] object    =>> in a [pending] state  =>> [182] same case
                                                                                                        // difference [XHR] [Ajax]

promise3.then(
    function(resolvedValue){                // [1] [anonymous function]
        console.log(resolvedValue);
    },
    (rejectedValue) => {                    // [2] [arrow function]
        console.log(rejectedValue);
    }
);




/*
    * [1] [2] [3]:    =>> result = Promise

    * promise status:
        [1] pending:    =>> initial state
        [2] resolved:   =>> fulfilled
        [3] rejected:


    * compare: [180] [182] [185]    =>> result = promise        =>> in a [] state

        [1] [180] result = [promise] object  =>> in a [pending] state    =>> promise with attached [then] directly
        [2] [182] result = [promise] object  =>> in a [pending] state    =>> calling function return a promise [Ajax inside Promise]
        [3] [185] result = [promise] object  =>> in a [resolved] state   =>> calling function return a [promise] only


    [1] [180]:

        const promise1 = new Promise( function(resolvedFunc, rejectFunc){   // [anonymous function] [arrow function]
            let connect = true;                                             // callback function that initializes the promise
            if(connect){                                                    // XHR  =>> onreadystatechange  =>> anonymous function only
                resolvedFunc("connection established [1]");
            }else{
                rejectFunc(Error("connection failed [1]"));     // Error constructor  =>> change result
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
        console.log(`${"#".repeat(30)}\n\n`);   // [synchronous] before [asynchronous]


    [2] [182]:

        function getData(apiLink) {
            return new Promise( function(resolved, rejected) {  // [anonymous function] [arrow function]
                let request1 = new XMLHttpRequest();            // callback function that initializes the promise

                request1.open("GET", apiLink, true);
                request1.send();

                request1.onload = function(){           // anonymous function  =>> arrow function = [syntax error]
                                                        // onload  =>> onreadystatechange = [syntax error]
                    if(this.readyState === 4 && this.status === 200){             // two are the same
                    //if (request1.readyState === 4 && request1.status === 200){ // [S] of [State] must be uppercase
                        resolved(JSON.parse(this.responseText));                  // [T] of [Text] must be uppercase
                    } else {
                        rejected(Error("no data is found"));            // Error constructor  =>> change result
                    };
                };
            });
        };

        let promise1 = getData("https://api.github.com/users/elzerowebschool/repos");

        console.log(promise1);      // result = [promise] object   =>> in a [pending] state

        promise1.then(
            function(resolvedValue){
                console.log(resolvedValue);
            }
        );

    [3] [185]

        function getData1(){
            return new Promise( (resolved, rejected) => {   // [anonymous function] [arrow function]
                let users = ["Osama"];                      // callback function that initializes the promise
                if(users.length > 0){                       // XHR  =>> onreadystatechange  =>> anonymous function only
                    resolved("users are found [1]");
                }else{
                    rejected("users are not found [1]");
                };
            } );
        };

                                                // [synchronous] before [asynchronous]
        console.log(getData1());                // result = [promise] object    =>> in a [resolved] state
        let promise1 = getData1();
        console.log(promise1);                  // result = [promise] object    =>> in a [fulfilled] state
        console.log(`${"#".repeat(30)}\n\n`);   // result = [promise] object    =>> in a [pending] state  =>> [182] same case
                                                                                                        // difference [XHR] [Ajax]

        promise1.then(
            function(resolvedValue) {                   // [1] [anonymous function]
                console.log(resolvedValue);
            },
            (rejectedValue) => {                        // [2] arrow function
                console.log(rejectedValue);
            }
        );
*/

// revision

