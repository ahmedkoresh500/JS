/*
    * request and response from real API:

    * [Ajax]:
        * readyState  =>> status of the request
            * [0]   =>> request not initialized
            * [1]   =>> server connection established
            * [2]   =>> request received
            * [3]   =>> processing request
            * [4]   =>> request is finished and response is ready

        * status:
            [200]  =>> response is successful
            [404]  =>> not found

    * onload
    * onreadystatechange    =>> [Ajax]      =>> [responseText]  = syntax error
    *                       =>> [promise]   =>> [rejected] applied only
*/

let request1 = new XMLHttpRequest();

// [open method]  specifies [request method]     =>> [GET] or [POST]
request1.open("GET", "https://api.github.com/users/elzerowebschool/repos", true);
request1.send();

console.log(typeof request1);               // result = object
console.log(request1);                      // result = [XMLHttpRequest] object
console.log(`${"#".repeat(30)}\n\n`);

request1.onreadystatechange = function(){   // anonymous function  =>> arrow function = [syntax error]
    console.log(request1.readyState);       // [S] uppercase
    console.log(request1.status);
    console.log(`${"#".repeat(30)}\n\n`);

    if(this.readyState === 4 && this.status === 200){               // two are the same
     // if(request1.readyState === 4 && request1.status === 200){   // two are the same
        console.log(typeof this.responseText);  // [1] result = JSON object - string object - text format
        console.log(`${"#".repeat(30)}\n\n`);   // result = string

        console.log(this.responseText);         // two are the same     =>> [T] of [Text] must be uppercase
        // console.log(request1.responseText);  // two are the same     =>> [T] of [Text] must be uppercase
        console.log(`${"#".repeat(30)}\n\n`);

        console.log( JSON.parse(this.responseText) );           // [2] result = JS object
        console.log( typeof JSON.parse(this.responseText) );    // [2] result = object
        console.log(`${"#".repeat(30)}\n\n`);
    };
};


//////////////////////////////////////
// revision

