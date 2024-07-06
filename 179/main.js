/*
    * [callback hell] or [pyramid of doom]:
        =>> to understand [Ajax], [fetch], [promises]

    [1] what is callback:
        =>> function passed to another function to be executed later  [function inside setTimeout()]

    * [EX]:
        =>> function to handle photos

        [1] download photo from url
        [2] resize photo
        [3] add logo to the photo
        [4] show the photo in website
*/

// EX [1]:
function makeItRed(event){
    console.log("paragraph color turned into red");
    event.target.style.color = "red";               // make inline-style
};

let p = document.querySelector(".test");            // [S] of [Selector] must be uppercase
p.addEventListener("click", makeItRed); // without parentheses  =>> not to called directly
                                        // without parentheses  =>> not to make syntax error

/*
p.addEventListener("click", function(event){
    console.log(event.target);                      // result = html element
    event.target.style.color = "red";
} );
*/


// EX [2]:
function iamCallback(){
    console.log("i'm callback");
};
setTimeout(iamCallback, 1000);      // without parentheses  =>> not to called directly
                                    // without parentheses  =>> not to make syntax error



// EX [3]:  [callback hell] or [pyramid of doom]
setTimeout( function(){
    console.log("[1] download photo from url");
    setTimeout( function(){
        console.log("[2] resize photo");
        setTimeout( function(){
            console.log("[3] add logo to the photo");
            setTimeout( function(){
                console.log("[4] show the photo in website");
            }, 1000 );
        }, 1000 );
    }, 1000 );
}, 1000 );


// revision
