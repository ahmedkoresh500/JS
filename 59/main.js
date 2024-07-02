/*
    * function return statement & use cases
    * function
        1- function return:
            =>> [return]  in funtion = [break] in [for] loop
            =>> any code after [return] not executed

        2- (ASI) automatic semicolon insertion [No line terminator allowed]
                return
                num1 + num2;        =>> error

            * formatter:
                return;
                num1 + num2         =>> any code after [return] not executed
        3- interrupting
*/

// example [1]
function SayHello( UserName ){
    return `Hello ${UserName}`;
}

SayHello("Ahmed");                  // type return =>> not print
console.log( SayHello("Ahmed") );   // [1] type return =>> printing it
let Result = SayHello("Ahmed");     // [2] type return =>> storing it in a variable
console.log( Result );


console.log( "\n" );


// example[2]
function Calc(Num1 , Num2){
    let Sum;
    Sum = Num1 + Num2;
    return Sum;
}
Calc(5 , 10);                       // type return =>> not pint
console.log( Calc(5 , 10) );        // [1] type return =>> printing it
let Sum = Calc(5 , 10)              // [2] type return =>> storing it in a variable
console.log( Sum + 100 );


console.log( "\n" );


// example [3]  =>> (ASI)
function Area(Height , Width){
    return;
    Height + Width;
}
Result = Area(10 , 20);
console.log(Result);                // result = undefined
console.log( Result + 100 );        // result = NaN

console.log( "\n" );

// example [4]
function Generate(Start , End){
    for(let i=Start ; i<=End ; i++){
        console.log(i);
        if(i === 16){
            return `interrupting`;  // [return] in function = [break] in [for] loop
                                    // one use for return   =>> interrupt
        }
    }
}
Generate(10 , 20);