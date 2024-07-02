/*
    * tracking time operations:

    * search on google:
        [1] performance.now();
        [2] performance.mark();
*/


let start = new Date();

for(i=0 ; i<100000 ; i++){
    //document.write( `<div> ${i} </div>` );
    let div = document.createElement("div");            // best performance than [document.write();]
    div.appendChild( document.createTextNode(i) );
    document.body.appendChild(div);
};

let end = new Date();
let duration = end - start;     // time in milliseconds

console.log(`time in milliseconds = ${duration/1000}`);

