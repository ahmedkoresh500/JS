/*
    * await:
        [1] [await] works only inside [async] function
        [2] [await] makes JS waits for promise result       =>> implementing [then] =>> asynchronous
        [3] [await]: elegant syntax for promise result

    * [await] with [async]   =>> without [try, catch, finally]
*/



// EX [1]:
const promise1 = new Promise( (resolved, rejected) => {
    setTimeout( () => {                     // [anonymous function] [arrow function]
        resolved("Good Promise");           // callback function that initializes the promise
    }, 2000 );                              // resolved applied only
} );

async function readData1(){
        /*
        promise1.then(                  // [await] makes JS waits for promise result  =>> implementing [then]  =>> asynchronous
            (resolvedValue) => {
                console.log(resolvedValue + " [1]");     // [1] two are the same
            }
        );
        */
        console.log(promise1);          // result = [promise] object   =>> in a [pending] state

        console.log(await promise1);    // [await] makes JS waits for promise result  //[1] two are the same
                                        // [await]  =>> convert promise [pending] -> [resolved]

        console.log(promise1);          // result = [promise] object   =>> in a [fulfilled] state
};

readData1();

/*
console.log(promise1);                          // result = [promise] object  =>> in a pending state
promise1.then(
    (resolved) => {
        console.log(`[1] ${resolved}`);
    }
);
*/
