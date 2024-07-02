/*
    * higher order function =>> function with arguments = another function

    * Map:
        =>> array method =>> create new array

    * syntax of map: 
        =>> .map(callBackFunction(element, index, array){}, this Argument)

        * [element] [index] [array] =>> arguments i can give them another name

        * [element]             =>> mandatory
        * [index] & [array]     =>> optional

        =>> element =>> current element
        =>> index   =>> index of current element
        =>> array   =>> current array

*/

// example [1]
let MyNums = [1, 3, 5, 7, 9, 11];
console.log(MyNums);            // merging two [console.log]   =>> joining array [MyNums]   =>> not printing it
console.log("\n");              // concat  two [console.log]   =>> joining array [MyNums]   =>> not printing it
let NewArray = [];              // defining new array
for(let i=0 ; i<MyNums.length ; i++){
    NewArray.push(MyNums[i] * 2);
}
console.log(NewArray);
console.log("\n");


// same idea    =>> using map (callBackFunction(element, index, array){}, this argument)
/*
let AddSelf = MyNums.map( function(Element, Index, Array){          // anonymous function
    //console.log(`current element = ${Element}`);
    //console.log(`current index = ${Index}`);
    //console.log(`array = ${Array}`);
    //console.log(`this = ${this}`);
    //console.log( "\n" );
    return Element + Element;
}, 10 );
*/

// same idea =>> using arrow function
let AddSelf = MyNums.map( (Element) => Element + 1 );           // callBack function  =>> [no return] [no semicolon] [no curelyBracket]
console.log(AddSelf);                                           // calling function
console.log("\n");


// same idea =>> another way
function Addition(ele){
    return ele + ele;
}
let Add = MyNums.map(Addition);
console.log(Add);


