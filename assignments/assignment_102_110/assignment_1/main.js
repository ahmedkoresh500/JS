/*
    * assignment [1]: [102:110] [D]
*/

let promptValue = prompt("print number from-to", "15-20");

let arrayOfTwoValues = promptValue.split("-");

arrayOfTwoValues = arrayOfTwoValues.map( (ele) => {
    return +ele;
} )

if(arrayOfTwoValues[0] < arrayOfTwoValues[1]){
    for(let i=arrayOfTwoValues[0] ; i<=arrayOfTwoValues[1] ; i++){
        console.log(i);
    }
}else{
    for(let i=arrayOfTwoValues[1] ; i<=arrayOfTwoValues[0] ; i++){
        console.log(i);
    }
}
