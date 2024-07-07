/*
    * [then, catch, finally]    =>> with [promise] [fetch API].

    * [try, catch, finally]     =>> with [promise] [fetch API].

    * [await] with [async]      =>> with [try, catch, finally].
*/

/*
// EX [2]:
const promise2 = new Promise ( function(resolved, rejected){
    setTimeout( () => {
        // resolved("Good promise");            // resolved applied only
        resolved("Good promise");               // resolved applied only
    }, 2000 );
} );
*/



async function readData2(){
    try{
        let http_Response = await fetch("https://api.github.com/users/elzerowebschool/repos");
        // console.log(typeof http_Response);       // result = object
        // console.log(http_Response);              // result = [response] object

        // promise =  http_Response.json();         // [response] object          =>> [promise] object
        // console.log(promise);                    // result = [promise] object  =>> in a [pending] state
        // console.log(await promise);              // [1] two are the same

        console.log(await http_Response.json());    // [1] two are the same
    }catch(rejected){                               // [await] convert promise [pending] -> [resolved]
            console.log(`rejected: ${rejected}`);   // [await] convert promise [pending] -> [rejected]
    }finally{
        console.log("[finally] after [try] [catch]");
    };
};

readData2();

/*
    * [finally] before [then] [catch].

    * [finally] after [try] [catch].

    =>> [await] inside [try] only

    * promise status:
        [1] pending     =>> initial state
        [2] resolved    =>> fulfilled
        [3] rejected
*/
