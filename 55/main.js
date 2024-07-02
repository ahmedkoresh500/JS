/*
    * Do while loop:

    * difference between [while] loop & [do while] loop
        =>> [do while] =>> loop will be executed at least one time if condition is false

*/

let Products = ["Keyboard" , "Mouse" , "Pen" , "Pad" , "Monitor" , "Iphone"];

let p=0;
while(false){
    console.log( Products[p] );
}

// while
p=0;
while(true){
    console.log( Products[p] );
    break;                          // not execute infinite loop because of break
}

console.log( "\n" );

// do while
p=0;
do{
    console.log( Products[p] );
    p++;
}while(false);
