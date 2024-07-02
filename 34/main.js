/*
    * if without {}  =>> it will execute first statement only after if

    * Nested if
        =>> for more organising in code

*/

let Name = "Ahmed";
let Student = true;
let Discount = false;
let Price = 100;
let DiscountAmount = 10;
let Country = "Egypt";

if(Discount === true){
    Price -= DiscountAmount;
}else if(Country === "Egypt"){
    if(Student === true){
        Price -= DiscountAmount + 30;   // discount for students  =>> [discount + 30] first =>> then minus all from price
        console.log( Price );
    }else{
        Price -= DiscountAmount + 10;   // discount for all people
        console.log( Price );
    }
}else{
    console.log( "No Discount" );
}


// y += x++
// y + x++
// y++ += x
// y++ += x++
// ++y += ++x