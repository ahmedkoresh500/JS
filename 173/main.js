/*
    * [asynchronous] vs [synchronous] programing:
        =>> to understand [Ajax], [fetch], [promises]

    [1] synchronous programing:
        * operations in sequence [squentially]
        * next operation after completion of previous operation
        * EX  =>> الطوابير في المترو

    [2] asynchronous programing:
        * operations in parallel
        * next and previous operation start simultaneously
        * EX  =>> الطرابيزات في المطعم

    * Facebook simulation as example:

    * فرق بين [تزامن] و [متزامن]
    * synchronous   =>>  تزامن, في زمن بين الشئ والتاني, كل حاجه واخده زمنها, شئ بعدب شئ
    * asynchronous  =>>  متزامن, مفيش تزامن, كلو مع بعضو

    * [synchronous] before [asynchronous]   =>> in execution

    * search on google:
        [1] JS  =>> synchronous     =>> single thread language      
        [2]                         =>> multi thread language

    * synchronous: [document.write()] [window.alert()] [console.log()]
*/

/*
// EX [1]:
console.log("1");               // synchronous
console.log("2");               // synchronous
window.alert("operations");     // synchronous
console.log("3");               // synchronous
*/


// EX [2]:
document.write("hello world");
window.alert("hello man");
console.log("1");                                           // synchronous
console.log("2");                                           // synchronous
setTimeout( _ => console.log("operation [2]"), 1000 );      // [asynchronous]
console.log("3");                                           // synchronous
