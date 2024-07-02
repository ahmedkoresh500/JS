/* 
    [1] function:
            =>> block of code to execute specific task

    2- DRY: don't repeat yourself

    3- [User-Defined] function vs [Built-In] function

    4- syntax + basic usage:
        =>> function FunctionName (arguments, parameters, data members){    =>> function head
                statements to execute;                                      =>> function body
            }

        =>> function doesn't work =>> till calling or trigger

    5- example from real life =>> التلاجه والمايه علشان تسقع

*/

console.log( typeof console.log );          // two are the same
window.console.log( typeof console.log );   // two are the same


function sayhello(){                    // function name  =>> sensitive to upper and lower cases
    console.log( "Hello Ahmed" );
}
sayhello();


// the last function written =>> it will be executed  =>> even if i call it before
function sayhello(UserName){
    console.log(`hello: ${UserName}`);
}
sayhello("Ahmed");


/*
    * console =>> object  =>> contains methods and properties
    * log =>> بحط فيه رساله فيطبعهالي في الخانه بتاعت اللوجينج

    * variables = arguments = parameters = data members معامل التجربه
            =>> can't be used outside function
*/

