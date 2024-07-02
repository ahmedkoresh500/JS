/*
    * practice of adding products using [for] loop
*/

let Products = ["Keyboard" , "Mouse" , "Pen" , "Pad" , "Monitor" , "Iphone"];
let Colors = ["Red" , "Green" , "Blue"];
let ShowCount = 5;



document.write(`<h1>${ShowCount} products shown</h1>`);
for( let p=0 ; p<ShowCount ; p++ ){
    document.write( `<div> <h3>[${p + 1}] ${Products[p]} </h3>`);

    for( let c=0 ; c<Colors.length ; c++ ){
        document.write(`<ph> ${Colors[c]} </p>`);
    }

    document.write( `<p> ${Colors.join( " | " )} </p>` );
    document.write(`</div>`);
}

