/*
    * DOM: [cloning]:
        [1] Element.cloneNode(deep);    =>> to clone element  =>> and modify it

        =>> deep:
                false   =>> default     =>> clone element with attributes
                                        =>> doesn't clone text

                true                    =>> clone element with attributes
                                        =>> clone text
*/

let p1 = document.querySelector(".p1");             // result = first element only  =>> print without index
//let ps = document.querySelectorAll(".p1");        // result = array               =>> print with index
let DivElement = document.querySelector("div");


let newP = p1.cloneNode(true);
newP.id = `${newP.id}-cloned`;      // new [id]  =>> [id] unique  =>> not repeated
DivElement.appendChild(newP);       // include element at the end


console.log(newP);                  // result = cloned p


/*
    =>>  Difference between [append()], [appendchild()]:
        * [append()]        =>> include several nodes
        * [appendChild()]   =>> include one node
*/

