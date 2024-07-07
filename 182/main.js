/*
    * promise and XHR [XMLHttpRequest]:

    * https://api.github.com/users/elzerowebschool/repos    =>> request and response from real API


    * [promise]                 =>> result = [promise] object
    * [Ajax] [XMLHttpRequest]   =>> result = [XMLHttpRequest] object

    * result = [promise] object    =>> in a [pending] state:
        [1] [Lesson 180] promise with [then] directly
        [2] [Lesson 182] calling function return a promise
        [3] [Lesson 183] fetch API
*/

// EX [1]:
function getData(apiLink) {
    return new Promise( function(resolved, rejected) {  // [anonymous function] [arrow function]
        let request1 = new XMLHttpRequest();            // callback function that initializes the promise

        request1.open("GET", apiLink, true);
        request1.send();

        request1.onload = function(){           // onload  =>> onreadystatechange = [syntax error]
                                                // anonymous function  =>> arrow function = [syntax error]
            if (request1.readyState === 4 && request1.status === 200){  // [S] of [State] must be uppercase
            // if(this.readyState === 4 && this.status === 200){        // two are the same
                resolved(JSON.parse(this.responseText));                // [T] of [Text] must be uppercase
            } else {
                rejected( Error("no data is found") );            // Error constructor  =>> change result
            };
        };
    });
};

getData("https://api.github.com/users/elzerowebschool/repos")
.then(
    (resolvedValue) => {                   // [1] [anonymous function]

        console.log(typeof resolvedValue);      // result = object
        console.log(resolvedValue);             // result = JS object
        console.log(resolvedValue.length);      // result = 23

        console.log(`${"#".repeat(30)}\n\n`);

        resolvedValue.length = 10;
        return resolvedValue;               // [a] promise: avoid [callback hell] or [pyramid of doom]
    }                                       // [b] [continuous then] no return = syntax error
).then(
    (resolvedValue) => {                        // [2] [arrow function]
        console.log(typeof resolvedValue);      // result = object
        console.log(resolvedValue);             // result = JS object
        console.log(resolvedValue.length);      // result = 10
        console.log(`${"#".repeat(20)}`);

        console.log(resolvedValue[0]);
        console.log(resolvedValue[0].name);
        resolvedValue.forEach( function(loapedSingleObject){
            document.write(`<p> ${loapedSingleObject.name} </p>`) 
    });
    }
).catch(
    function(rejected){                         // [anonymous function] [arrow function]
        console.log(rejected);
    }
);

// Error constructor change result
// [catch] = [rejected] function inside [then]      =>> cancel red error
// console.log(`${rejectedValue}`);                 =>> data about error
// console.log(`bad ${rejectedValue}`);             =>> no data about error


/*
console.log(getData("https://api.github.com/users/elzerowebschool/repos")); // result = [promise] object => in a [pending] state
let promise1 = getData("https://api.github.com/users/elzerowebschool/repos");
console.log(promise1);                                                      // result = [promise] object => in a [pending] state

promise1.then(
    function(resolvedValue){
        console.log(resolvedValue);
    }
);
*/


/*
    [1] callback function                       = [arrow function]
        () => console.log()
        _  => console.log()
        =>> no return =>> no semicolon =>> no curelybracket                 =>> optional
        =>> no function name =>> no function keyword  =>> no parentheses
        =>> uses arrow

    [2] anonymous function
        function(){}
        =>> no functionName

    [3] arrow function                          =>> = callback function
        () => {}
        _ => {}
        =>> no return =>> no semicolon =>> no curelybracket                 =>> optional
        =>> no function name =>> no function keyword  =>> no parentheses
        =>> uses arrow
*/


/*
// arrow function
let Hello = () => {
    console.log("hello");
};
Hello();
*/

// revision
