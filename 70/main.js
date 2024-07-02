/*

    * arrow function challenge

*/


/*
    * Challenge [1]:
        [1] convert this regular function to arrow function
        [2] print the output  =>> [arguments may change]
*/


let Names1 = function (...AllNames){
    // parameter
    return `Srtring [${AllNames.join('], [')}] => Done ! `;
};


let Names2 = (...AllNames) => `Srtring [${AllNames.join('], [')}] => Done ! `;
console.log( Names2("Osama", "Mohamed", "Ibrahim", "Ali") );



/*
    * challenge [2]:
        [1] create function with regular syntax
        [2] use array inside function arguments
        [3] make function return output 80
*/

let Numbers = [20, 50, 10, 60];
//let Calc = (One , Two , ...Nums) => One + Two + Nums[0];
function Calc(One, Two, ...Nums){
    return One + Two + Nums[0];
};
console.log( Calc(10, Numbers[0], Numbers[1]) );