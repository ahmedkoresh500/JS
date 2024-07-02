/*
    * function default parameter:

    * default value for parameters = undefined   =>> if parameters not written when calling

    [1] old strategies [if condition], [logical or (||)]
    [2] ES6 method
*/

// [1] old strategies
function SayHello(UserName, Age){
    // [1]
    //if(Age === undefined){
    //    Age = "Unknown";
    //};

    // [2]
    //Age = Age || "Unknown";

    return `Hello ${UserName} your age is: ${Age}`; // if [console.log();]  =>> extra undefined will appear
}
console.log(SayHello("Ahmed"));
console.log("\n");


// [2] [ES6] method
function Say (UserName = "Unknown", Age = "Unknown"){           // default parameter
    return `Hello ${UserName} your age is: ${Age}`; // if [console.log]  =>> extra undefined will appear
}
console.log( Say() );

