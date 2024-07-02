/*
    * return =>> nested function calling:
        =>> to simplify big complicated function into smaller functions

    * i can use main function arguments in nested function
            =>> without identifying them in nested function
*/


// example [1]
// main function
function SayMessage1 (FName, LName){
    let Message = "Hello";
    // nested function
    function ConcatMsg(){
        Message = `${Message} ${FName} ${LName}`;
    };
    ConcatMsg();
    // return ConcatMsg();      // result = undefined
    return Message;
};
console.log( SayMessage1('Ahmed', 'alaa') );




// example [2]
// main function
function SayMessage2 (FName, LName){
    let Message = "Hello";
    // nested function
    function ConcatMsg(){
        return `${Message} ${FName} ${LName}`;
    };
    return ConcatMsg();         // return nested function calling
};
console.log( SayMessage2('Ahmed', 'Zaki') );


// example [3]
// main function
function SayMessage3 (FName, LName){
    let Message = "Hello";
    // nested function
    function ConcatMsg(){
        //return `${Message} ${FName} ${LName}`;    // two are the same
        Message = `${Message} ${FName} ${LName}`;   // two are the same     =>> incompatible with EX [1]
    };

    //ConcatMsg();           // return nested function calling

    //return FName;         // all are the same
    //return LName;         // all are the same
    //return Message;       // all are the same
    return ConcatMsg();
};
console.log( SayMessage3('Ahmed', 'Mohamed') );




// example [4]
function SayMessage3 (FName, LName){
    let Message = "Hello";
    // nested function
    function ConcatMsg(){
        function GetFullName(){
            return `${FName} ${LName}`;
        };
        return `${Message} ${GetFullName()}`;
    };

    return ConcatMsg();
};
console.log( SayMessage3('Ahmed', 'Koresh') );