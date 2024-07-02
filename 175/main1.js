/*
    * [event loop], [callback queue]:

    * story:
        [1] JS  =>> synchronous programing  =>> single thread language
                                            =>> multi thread language
        [2] call stack  =>> mechanism to make the interpreter track your calls

        [3] when function executed  =>> it's popped out
        [4] when calling asynchronous function  =>> it's sent to web API
        -> [5] [setTimeout();]  =>> asynchronous function  =>> starts its own thread =>> although single thread

        [6] [web API] act as a second thread
        [7] API finish waiting and send back the function for processing
        [8] [web API] add callback to callback queue

        [9] [event loop] wait for call stack to be empty
        [10] [event loop] get callback from callback queue  =>> and add it to call stack    [LIFO]
        -> [11] [callback queue] applies principle "FIFO"          [callback function]


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

