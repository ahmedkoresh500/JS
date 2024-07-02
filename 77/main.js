/*
    * map       =>> array method    =>> create new array    =>> return value    =>> tested value true
    * filter    =>> array method    =>> create new array    =>> return value    =>> true or false value
    * reduce    =>> array method    =>> return one value not array
    * foreach                       =>> doesn't return anything

    * forEach():
        =>> forEach( callBackFunction(element, index, array ){}, argument)  // [argument] refered with this

        =>> doesn't return anything     [undefined]
        =>> break =>> doesn't break the loop
        =>> used when no process on array data

    * document.querySelector();         =>> result = first element only     =>> print without index
    * document.querySelectorAll();      =>> result = array                  =>> print with index

*/


/*
document.getElementById("active").onclick = function(){
    console.log("show");
};
*/


// EX[1]: forEach()
let AllLis= document.querySelectorAll("ul li");                 // same calling like CSS
let AllDivs = document.querySelectorAll(".content div");        // calling class with dot

console.log(AllLis);       
// class "active" still at first li in console =>> even if i clicked second li

AllLis.forEach( function(ele){
    //return ele;                       // [1] doesn't return aything [undefined]
    //console.log(ele);                 // <li> one </li>
    //console.log(ele.innerHTML);       // result = one two three

    ele.onclick = function(){           // [this] instead of [ele]  =>> error
        // remove active class from all elements =>> when click
        AllLis.forEach( function(ele){
            ele.classList.remove("active");
            // ele.className = "";
        } );

        //console.log(this);              // print this element   =>> <li> </li>
        // add active class to this element =>> when click
        this.classList.add("active");

        // hide all divs
        AllDivs.forEach( function(ele){
            ele.style.display = "none";         // DOM property [attribute]
        } )
    }
} );


// forEach() =>> practice [2]
console.log(AllDivs);



