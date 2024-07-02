/*
    * function =>> random arguments challenge
    ==========================================
    1- create function ShowDetails();
    2- function receive 3 arguments [a, b, c]
    3- their are 3 variables inside function with their data type:
        [1] Name        =>> string
        [2] Age         =>> number
        [3] Available   =>> boolean for status
    4- arguments are random
    5- data is not stored    =>> output depends on data types
    6- use [conditional ternary operator] = if المختضره   =>> for specific cases


    * solution:
    ====================
    [1] main arguments:
        a, b, c

    [2] created variables: to organize main variables' arrangement
        Name        =>> string
        Age         =>> number
        Available   =>> boolean
*/

function ShowDetails(a, b, c){
    let Name, Age, Available;
    typeof a==="string" ? Name=a : typeof b==="string" ? Name=b : Name=c ;
    typeof a==="number" ? Age=a : typeof b==="number" ? Age=b : Age=c ;
    typeof a==="boolean" ? Available=a : typeof b==="boolean" ? Available=b : Available=c ;

    /*
    if(typeof a === "string"){
        Name = a;
    }else{
        if(typeof b === "string"){
            Name = b;
        }else{
            Name = c;
        };
    };
    */

    if(Available === true){
        document.write(`<p style='font-size:24px;'> Hello ${Name}, Your age is ${Age}, you are available for hiring </p>`);
    }else{
        document.write(`<p style='font-size:24px;'> Hello ${Name}, Your age is ${Age}, you are not available for hiring </p>`);
    }
}

// dependent age = 30
ShowDetails( "Ahmed", 23.5, true );     // Hello Ahmed, Your age is 23.5, you are available for hiring
ShowDetails( 38, "Ahmed", true );       // Hello Ahmed, Your age is 38, you are available for hiring
ShowDetails( true, 23.5, "Ahmed" );     // Hello Ahmed, Your age is 38, you are available for hiring
ShowDetails( false, "Ahmed", 23.5 );    // Hello Ahmed, Your age is 23.5, you are not available for hiring
