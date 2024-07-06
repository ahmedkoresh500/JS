/*
    * [event loop], [callback queue]:

    * story:
        [1] JS  =>> synchronous programing  =>> single thread language
                                            =>> multi thread language
        [2] call stack  =>> mechanism to make the interpreter track your calls

        [3] when function executed  =>> it's popped out [it's timed out]
        [4] when [asynchronous function] called:
                                            [a] it's sent to [web API]
                                            [b] starts its own thread =>> although single thread

        [5] [web API] act as a second thread
        [6] API finish waiting and send back the function for processing
        [7] [web API] add callback to callback queue

        [8] [event loop] wait for call stack to be empty
        [9] [event loop] get callback from callback queue  =>> and add it to call stack    [LIFO]
        -> [10] [callback queue] applying "FIFO" principle      =>> [callback function]


    * web API = browser API
    * popped out = timed out
*/

console.log("[one]");           // [1] synchronous

setTimeout( () => {             // asynchronous function    =>> callback queue  =>> "FIFO"
    console.log("three")
},0 );
setTimeout( () => {             // asynchronous function    =>> callback queue  =>> "FIFO"
    console.log("four")
},0 );

console.log("[two]");           // [2] synchronous

let var1 = 50;
var1 += 50;
console.log(var1);

