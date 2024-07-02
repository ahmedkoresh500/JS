/*
    * [asynchronous] vs [synchronous] programing:
        =>> to understand [Ajax], [fetch], [promises]

    [1] synchronous programing:
        * operations in sequence
        * next operation after completion of previous operation
        * EX  =>> الطوابير في المترو

    [2] asynchronous programing:
        * operations in parallel
        * next and previous operation start simultaneously
        * EX  =>> الطرابيزات في المطعم


    * Facebook simulation as example:

    * synchronous   =>>  متزامن
    * asynchronous  =>>  غير متزامن

    * [synchronous] before [asynchronous]

    * search on google:
        [1] JS  =>> synchronous     =>> single thread language      
        [2]                         =>> multi thread language
*/

/*
    [1] document.write();       // synchronous
    [2] window.alert();         // synchronous
    [3] console.log();          // synchronous
*/

/*
// EX [1]:
console.log("1");               // synchronous
console.log("2");               // synchronous
window.alert("operations");     // synchronous
console.log("3");               // synchronous
*/


// EX [2]:
console.log("1");                                           // synchronous
console.log("2");                                           // synchronous
setTimeout( _ => console.log("operation [2]"), 1000 );      // [asynchronous]
console.log("3");                                           // synchronous

