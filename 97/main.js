/*
    * DOM: [deal with elements]
        [1] Element.before(  [String] [Element] [variable] );    =>> add before directly
        [2] Element.after(   [String] [Element] [variable] );    =>> add after directly
        [3] Element.append(  [String] [Element] [variable] );    =>> include element at the end
        [4] Element.prepend( [String] [Element] [variable] );    =>> include element at the start
        [5] Element.remove();

    * methods = functions = actions = behaviors
*/

let DivElement = document.getElementById("my-div");

let p1 = document.createElement("p");
let p2 = document.createElement("p");
p1.innerHTML = " [paragraph 1] ";
p2.innerHTML = " [paragraph 2] ";




// [before, after] [append, prepend]  =>> can use variable one time only
DivElement.before(" [before 1] ");                  // add before directly
DivElement.before(" [before 2] ");                  // add before directly
DivElement.before(p1);                              // add before directly


DivElement.after(" [after 1] ");                    // add after directly
DivElement.after(" [after 2] ");                    // add after directly
DivElement.after(p2);                               // add after directly




DivElement.append("[append 1]");                    // include element at the end
DivElement.append(" [append 2] ");                  // include element at the end

DivElement.prepend("[prepend 1]");                  // include element at the start
DivElement.prepend(" [prepend 2] ");                // include element at the start


/*
p1.remove();                                    // remove from DOM tree   =>> better than [display: none;]
*/


/*
    * Difference between [append()] [appendchild()]:
        =>> [append()]        =>> include several nodes
        =>> [appendChild()]   =>> include one node
*/

