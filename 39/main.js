/*
    * multiple cases in switch = [||] logical operator in if statement
*/


// challenge [1]
// turn if statement to switch
let Job = "Manager";
let Salary = 0;

if( Job === "Manager" ){
    Salary = 8000;
    console.log( `You are manager, Your salary is: ${Salary}` );
}else if( Job === "IT" || Job === "Support" ){
    Salary = 6000;
    console.log( `You are IT or support, Your salary is: ${Salary}` );
}else if( Job === "Developer" || Job === "Designer" ){
    Salary = 7000;
    console.log( `You are Designer or Developer, Your salary is: ${Salary}` );
}else{
    Salary = 4000;
    console.log( `You are nirmal employee, Your salary is: ${Salary}` );
}

switch(Job){
    case "Manager":
        Salary = 8000;
        console.log( `You are manager, Your salary is: ${Salary}` );
        break;

    case "IT":
    case "Support":
        Salary = 6000;
        console.log( `You are IT or support, Your salary is: ${Salary}` );
        break;

    case "Designer":
    case "Developer":
        Salary = 7000;
        console.log( `You are Designer or Developer, Your salary is: ${Salary}` );
        break;

    default:
        Salary = 4000;
        console.log( `You are nirmal employee, Your salary is: ${Salary}` );
}




// challenge [2]
// turn switch to if statement
let Holidays = 0;
let Money = 0;
switch(Holidays){
    case 0:
        Money = 5000;
        console.log( `my money is: ${Money}` );
        break;

    case 1:
    case 2:
        Money = 3000;
        console.log( `my money is: ${Money}` );
        break;

    case 3:
        Money = 2000;
        console.log( `my money is: ${Money}` );
        break;

    default:
        Money = 0;
        console.log( `my money is: ${Money}` );
}

if( Holidays === 0 ){
    Money = 5000;
    console.log( `my money is: ${Money}` );
}else if( Holidays === 1 || Holidays === 2 ){
    Money = 3000;
    console.log( `my money is: ${Money}` );
}else if( Holidays === 3 ){
    Money = 2000;
    console.log( `my money is: ${Money}` );
}else{
    Money = 0;
    console.log( `my money is: ${Money}` );
}