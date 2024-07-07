/*
    * await:
        [1] [await] works only inside [async] function
        [2] [await] makes JS waits for promise result       =>> implementing [then]  =>> asynchronous
        [3] [await]: elegant syntax for promise result

    * [await] with [async]    =>> without [try, catch, finally]
*/


// EX [2]:
const promise2 = new Promise( (resolved, rejected) => {
    setTimeout( () => {
        rejected( Error("Bad Promise") );       // [Error] constructor  =>> change result
    }, 1000 );                                  // rejected applied only
} );

async function readData2(){
        /*
        promise2.then(
            function(resolvedValue){            // [1] anonymous function
                console.log(resolvedValue);
            },
            (rejectedValue) => {                // [2] arrow function
                console.log(`Bad: ${ rejectedValue}`);
            }
        );
        */
        // console.log(await promise2);                                     // = syntax error
        console.log( await promise2.catch( (err) => err ) );                // callback function
        console.log( await promise2.catch( (err) => {return err;} ) );      // callback function
                                    // [***] [await] =>> convert promise [pending] -> [rejected]
        
        await promise2.catch( (err) => console.log(err) );                  // callback function
        
};

readData2();

// Error constructor change result
// [catch()] = [rejected] function inside [then]    =>> cancel red error
// console.log(rejectedValue);                      =>> data about error
// console.log(`bad ${rejectedValue}`);             =>> no data about error
