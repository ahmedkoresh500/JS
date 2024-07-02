/*
    * [export named vs default] & [import all]:
        [1] export alias name
        [2] export named
        [3] export default
        [4] import all
*/

let a = 10;
let array = [1, 2, 3, 4];

function saySomething(){
    return `something`;
};

export{
    a as number, array, saySomething            // alias name
};

export default function sayHello(){             // export default   =>> one export default
    return `Hello`;                             // = can be anonymous function
};                                              // = can be imported with anyname

