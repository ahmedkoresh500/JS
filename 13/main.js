/*
    [1] [let] [const] =>> launched in ES6


    [2]
    * var   =>> can redeclare
    * let   =>> can't redeclare
    * const =>> can't redeclare
    
    * var   =>> can revalue
    * let   =>> can revalue
    * const =>> can't revalue
    

    [3] when printing before declaring
        * var   =>> undefined
        * let   =>> error
        * const =>> error

    [4]
        * var   =>> can access globally
        * let   =>> can access globally
        * const =>> can access globally
        
        * var   =>>     added to [window.object]
        * let   =>> not added to [window.object]
        * const =>> not added to [window.object]
        
        * var   =>>     make [variable scope drama]
        * let   =>> not make [variable scope drama]
        * const =>> not make [variable scope drama]
*/


var a = 10;
var a = 15;
console.log(a);


let b = 20;
// let b = 25;
b = 25;
console.log(b);

const c = 30;
// c = 35;
console.log(c);

