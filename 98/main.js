/*
    * DOM [traversing]:
        [1] Element.nextSibling                     =>> [S] of [Sibling] must be uppercase
        [2] Element.nextElementSibling              =>> [S] of [Sibling] must be uppercase

        [3] Element.prviousSibling                  =>> [S] of [Sibling] must be uppercase
        [4] Element.previousElementSibling          =>> [S] of [Sibling] must be uppercase

        [5] Element.parentElement                   =>> [E] of [Element] must be uppercase

*/

let Span2 = document.querySelector(".two");         // result = first element only  =>> print without index
// let Span = document.querySelectorAll("".two");   // result = array               =>> print with index

console.log(Span2);
console.log(`${"#".repeat(30)}\n\n`);

console.log(Span2.nextSibling);                 // result = [<!-- comment 2 -->]
console.log(Span2.nextElementSibling);          // result = [<span class="three"> span 3 </span>]
console.log(`${"#".repeat(30)}\n\n`);


console.log(Span2.previousSibling);             // result = [#text]
console.log(Span2.previousElementSibling);      // result = [<span class="one"> span 1 </span>]

// console.log(Span2.parentElement.remove());   // result = undefined


Span2.onclick = function(){                     // anonymous function
    Span2.parentElement.style.opacity = .4;
    //Span2.parentElement.remove();             // remove from DOM tree  =>> better than [display: none;]
}                                               // use:  =>> close button inside [pop-up]


