/*
    * while loop

    * difference between [while] loop & [do while] loop
        =>> [do while] =>> loop will be executed at least one time if condition is false

*/


let Products = ["Keyboard" , "Mouse" , "Pen" , "Pad" , "Monitor" , "Iphone"];   // length = 6

let p=0;                                        // [1] initial value
while(p<10){                                    // [2] condition            =>> [while(ture)] =>> not execute infinite loop because of [break]
    console.log( `[${p+1}] ${Products[p]}`);    // [4] statement to execute
    p++;                                        // [3] update expression

    if( p === 3 )
        break;                                  // to break loop =>>  to skip loop
}