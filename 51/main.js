/*
    * loop control
        1- break
        2- continue
        3- label

*/

let Products = ["Keyboard" , "Mouse" , 10 , 20 , "Pen" , "Pad" , 30 , 40 , "Monitor"];
let Colors = ["Red" , "Green" , "Black"];



// [1] loop control =>> break
for( let i=0 ; i<Products.length ; i++){
    if( Products[i] === "Pen" ){
        break;                          // to break loop  =>> to skip loop
    }
    console.log( Products[i] );         // after break =>> not printed
}



console.log( "\n" );



// [2] loop control =>> continue
for( let i=0 ; i<Products.length ; i++){
    if( typeof Products[i] === "number" ){
        continue;                          // to continue loop =>> to skip one condition
    }
    console.log( Products[i] );         // after continue =>> this case not printed
}


console.log( "\n" );



// [3] loop control =>> label
mainloop:
for( let i=0 ; i<Products.length ; i++){
    if( typeof Products[i] === "number" ){
        continue;
    }
    console.log( Products[i] );
    
    nestedloop:
    for( let c=0 ; c<Colors.length ; c++){
        if( Colors[c] === "Black" ){
            break mainloop;
        }
        console.log( `- ${Colors[c]}` );
    }
}


console.log( "\n" );


// [3] loop control =>> label
mainloop:
for( let i=0 ; i<Products.length ; i++){
    if( typeof Products[i] === "number" ){
        continue;
    }
    console.log( Products[i] );
    
    nestedloop:
    for( let c=0 ; c<Colors.length ; c++){
        if( Colors[c] === "Black" ){
            continue;                       // to continue loop =>> to skip one condition
        }
        console.log( `- ${Colors[c]}` );
    }
}