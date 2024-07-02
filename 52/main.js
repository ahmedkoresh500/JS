/*
    * loop =>> advanced example

*/

let Products = ["Keyborad" , "Mouse" , "Pen" , "Pad" , "Monitor" , "Iphone"]; // length=6

let i=0;

for(  ;  ;  ){       // [i] identified for [for loop] only
    if(i<Products.length){
        console.log( Products[i] );
        i++;
    }else{
        break;
    }
}

// console.log( i );                            // =>> error



// another way for loop =>> advanced example
i = 0;                                  // reassigning value
for(  ;  ;  ){                          // no semicolon =>> syntax error
    
    console.log( Products[i] );
    i++;
    if(i === Products.length)
        break;
}


