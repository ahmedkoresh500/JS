/*
    * if statement =>> to control flow:
        =>> to control based on current condition using if statement

    if(condition){
        statement to execute
    }else if (condition){                    
        statement to execute
    }else{
        statement to execute
    }

    =>> space between [else if] is a must

    * [KSA] =>> Kingdom Saudi Arabia

*/

let Name = "Ahmed";
let Discount = false;
let Price = 100;
let DiscountAmount = 30;
let Country = "Egypt";

if( Name === "Ahmed" ){
    Price = Price - 20;
    console.log( Price );
}else if(Discount === true){
    Price = Price - DiscountAmount;
    console.log( Price );
}else if(Country === "egypt"){       // sensitive to upper and lower cases =>> "egypt"
    Price = Price - 40;
    console.log( Price );
}else{
    console.log( "No Discount" );
}
