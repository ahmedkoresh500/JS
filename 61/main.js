/*
    * rest parameter:  =>> built-in function receive unlimited number of arguments

    1- array of arguments
    2- only one rest parameter allowed [...Numbers]
    3- must be last element =>> must be last argument

    * syntax: ...RestParameterName

    * EX:
        function FunctionName(...RestParameterName){
            statements to execute;
        };
*/

function Calc(Num1, Num2){
    return Num1 + Num2;
}
console.log( Calc(10, 20) );
console.log("\n");


// rest parameter =>> must be last element =>> must be last argument
Wel = "You Are Welcome";
function Calculation(Welcome, ...Numbers){
    console.log(Array.isArray(Numbers));
    // return Num1 + Num2;  // syntax error

    let Result = 0;
    for(let i=0 ; i<Numbers.length ; i++){
        console.log(Numbers[i]);
        Result += Numbers[i];       // Result = Result + Numbers[i];
    }
    console.log( "\n" );
    return `${Welcome} final result = ${Result}`;
}
console.log( Calculation(Wel , 10 , 20 , 70 , 100) );

