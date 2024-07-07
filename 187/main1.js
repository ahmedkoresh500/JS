/*

    * [promise] [fetch API]         =>> [then, catch, finally]
    * [promise] [fetch API]         =>> [try, catch, finally]
    * [async] and [await]           =>> with [try, catch, finally].

*/


// EX [1]:
const promise1 = new Promise( function(resolved, rejected){
    setTimeout( function(){                             // [anonymous function] [arrow function]
        // resolved("Good promise");                    // resolved applied only
        rejected(Error("Bad promise"));                 // rejected applied only
    }, 1000 );                                          // Error constructor  =>> change result
} );

async function readData(){
    try{                                                // [await] inside [try] only
        console.log(await promise1);                    // [***] [await] =>> convert promise [pending] -> [rejected]
    }catch(rejected){                                   // rejected applied only 
            console.log(rejected);                      // data about error
    }finally{
        console.log("[finally] after [try] [catch]");    // [finally] after [try] [catch]
    };
};

readData();

// Error constructor  =>> change result
// [catch] = [rejected] function inside [then]      =>> cancel red error
// console.log(rejectedValue);                      =>> data about error
// console.log(`bad ${rejectedValue}`);             =>> no data about error

/*
    [1] [finally] before [then] [catch].
    [2] [finally] after [try] [catch].

    =>> [await] inside [try] only:

    * promise status:
        [1] pending     =>> initial state
        [2] resolved    =>> fulfilled
        [3] rejected
*/
