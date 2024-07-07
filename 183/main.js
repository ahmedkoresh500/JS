/*
    * fetch API:
        =>> return [response object] [status = 200]

    * result = [promise] object     =>> in a [pending] state:
        [1] [Lesson 181] promise with [then] directly
        [2] [Lesson 182] calling function return a promise
        [3] [Lesson 183] fetch API
*/



/*

let getData = function(apiLink){
    return new Promise( (resolved, rejected) => {   // [anonymous function] [arrow function]
        let request1 = new XMLHttpRequest();        // callback function that initializes the promise
                                                    // [XHR] onreadystatechange =>> anonymous function only
        request1.open("GET", apiLink);
        request1.send();

        request1.onload = function(){           // onload  =>> onreadystatechange = [syntax error]
                                                // anonymous function =>> arrow function = [syntax error]
            if(request1.readyState === 4 && request1.status === 200){   // [S] of [State] must be uppercase
                resolved( JSON.parse(this.responseText) );              // [T] of [Text] must be uppercase
            }else{
                rejected( Error("no data is found") );      // Error constructor    =>> change result
            };
        };
    } );
};

getData("https://api.github.com/users/elzerowebschool/repos")
.then(
    (resolvedValue) => {
        console.log(resolvedValue);
    }
);

*/


// request1.open("GET", "https://api.github.com/users/elzerowebschool/repos");
fetch("https://api.github.com/users/elzerowebschool/repos")
.then(
    function(Response){                 // [1] anonymous function
        console.log(typeof Response);       // result = object
        console.log(Response);              // result = [response] object

        let promise = Response.json();          // [response] object    =>> [promise] object
        console.log(promise);                   // result = [promise] object   =>> in a [pending] state
        console.log(`${"#".repeat(30)}\n\n`);

        return promise;                         // [a] fetch: avoid [callback hell] or [pyramid of doom]
    }                                           // [b] [continuous then] no return = syntax error 
).then(
    (resolvedpromise) => {              // [2] arrow function
        console.log(resolvedpromise);           // result = [resolved] object    =>> array of objects

        resolvedpromise.length = 10;
        return resolvedpromise;                 // [a] fetch: avoid [callback hell] or [pyramid of doom]
    }                                           // [b] [continuous then] no return = syntax error
).then(
    (resolvedobject) => {
        console.log(resolvedobject);
        console.log(resolvedobject[0].name);
        resolvedobject.forEach( (loapedSingleObject) => document.write(`<p> ${loapedSingleObject.name} </p>`) );
    }
);

/*
    * to use local [JSON] file:
        =>> use [XMLHttpRequest]
        =>> not [fetch]
*/
