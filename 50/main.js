/*
    * Nested loop:

*/

let Products = ["Keyboard" , "Mouse" , "Pen" , "Pad" , "Monitor"  ];
let Colors = ["Red" , "Green" , "Blue"];
let Models = [2020 , 2021];

for( let p=0 ; p<Products.length ; p++ ){
    console.log( "#".repeat(15) );
    console.log( "@ " + Products[p] );
    console.log( "-".repeat(6) );
    for( let c=0 ; c<Colors.length ; c++ ){
        console.log( "- " + Colors[c] );
    }
    console.log( "-".repeat(6) );
    for(let m=0 ; m<Models.length ; m++){
        console.log( "+ " + Models[m] );
    }
}