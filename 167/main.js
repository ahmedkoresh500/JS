/*
    * import and export modules:

    * open with live server  =>> to avoid [CORS policy] error
*/

/*
// two syntaxes:
export let a = 10;
export let array1 = [1, 2, 3, 4];

export function saySomething(){
    return `something`;
};
*/

let a = 10;
let array1 = [1, 2, 3, 4];

function saySomething(){
    return `Hello something`;
};

export{
    a, array1, saySomething              // without parentheses
};

