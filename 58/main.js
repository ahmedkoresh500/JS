/*
    * [function]  =>> advanced example

    * FunctionName =>> sensitive to upper and lower cases

    * function doesn't work     =>> till calling or trigger  =>> with arguments if found

    * undefined result  =>> if function body contains arguments weren't defined in function head    =>> when calling

*/


// example [1]
function SayHello( UserName, Age ){                        // function head
    if(Age>30){
        console.log(`Hello ${UserName}, App is not suitable for you cauz your age is greater than 30`);  // function body
    }else{
        console.log(`Hello ${UserName}, App is suitable for you cauz your age is less than 30`);        // function body
    }
}

SayHello( "[Ahmed]", 23.5 );
SayHello( "[Mohamed]", 50 );
SayHello( "[Koresh]", 100 );



// example [2]
function GenerateYear(Start, End, Exclude){
    for(let i=Start ; i<=End ; i++){
        if(i === Exclude){
            continue;           // before [console.log(i);]
        }
        console.log(i);
    }
}

GenerateYear( 2015, 2022, 2020);