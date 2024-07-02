/*
    * anonymous function =>> function without FunctionName

    * [use]:  =>> to make action for specific click

    * higher order function =>> function accept arguments = another function    =>> ex: setTimeout();

*/

// EX [1]:
console.log( Calc1(10, 20) );       // i can call function before identification
function Calc1(Num1, Num2){         // i can call function before initialization
    return Num1 + Num2;
}


// EX [2]:
/*
console.log( Area(10, 20) );            // calling with variable must be after function
let Area = function Calc2(Num1, Num2){  // calling with variable must be like function  =>> with arguments if found
    return Num1 + Num2;
}
//console.log( Calc2(10, 20) );            // can't access [Calc2(10, 20);]
*/



// EX [3]: anonymous function
let Calculator = function (Num1, Num2){
    return Num1 + Num2;
}
console.log( Calculator(20, 20) );      // calling with variable must be after function
                                        // calling with variable must be like function  =>> with arguments if found

// EX [4]:
function SayHello(){
    console.log( "Hello Ahmed" );
}
// document.getElementById("show").onclick = SayHello;          // way [1]  =>> without parentheses  =>> not to called directly
document.getElementById("show").onclick = function () {         // way [2]  =>> anonymous function
    SayHello();                                                 // SayHello;=>> function not called
    console.log( "nice click" );
}

// EX [5]:
// setTimeout();  =>> higher order function
setTimeout( function(){
    console.log("\nFrom setTimeout");
}, 3000)

