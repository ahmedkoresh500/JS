/*
    * [then, catch, finally]    =>> with [promise] [fetch API].

    * [try, catch, finally]     =>> with [promise] [fetch API]:

    * [await] with [async]      =>> with [try, catch, finally].

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
        console.log(await promise1);                    // [***] [await] =>> convert promise [from pending] [to rejected]
    }catch(rejected){                                   // rejected applied only 
            console.log(rejected);                      // data about error
    }finally{
        console.log("[finally] after [try] [catch]");    // [finally] after [try] [catch]
    };
};

readData();

// [catch] = [rejected] function inside [then]      =>> cancel red error
// console.log(rejectedValue);                      =>> data about error
// console.log(`bad ${rejectedValue}`);             =>> no data about error


/*
    * [finally] before [then] [catch].

    * [finally] after [try] [catch].


    =>> [await] inside [try] only:


    * promise status:
        [1] pending     =>> initial state
        [2] resolved    =>> fulfilled
        [3] rejected
*/

