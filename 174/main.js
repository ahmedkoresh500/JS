/*
    * [call stack] and [web API]:
        =>> to understand [Ajax], [fetch], [promises]

    * call stack | stack trace:
        [1] mechanism to make the interpreter track your calls
        [2] JS engine uses [call stack] to manage execution contexts

        [3] when function called, it's added to the stack
        [4] when function executed, it's removed from the stack
        [5] after function execution  =>> interpreter continue from the last point

        [6] applying LIFO principle [last in, first out]
        [7] code execution is synchronous
        [8] call stack detect web API methods  =>> and leave them to the browser to handle them

    * web API methods:
        =>> methods available from the environment  =>> browser
*/


// [synchronous] before [asynchronous]

setTimeout( _ => {
    console.log("asynchronous web API"); // [asynchronous]
},0 );

function one(){
    console.log("synchronous one");     // [synchronous]
};

function two(){
    one();
    console.log("synchronous two");     // [synchronous]
};

function three(){
    two();
    console.log("synchronous three");   // [synchronous]
};

three();

