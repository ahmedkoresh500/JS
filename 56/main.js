/*
    * loop challenge =>> done successfully
*/


let MyAdmins = ["Ahmed" , "Osama" , "Sayed" , "Stop" , "Samera"];
let MyEmployees= ["Amgad" , "Samah" , "Ameer" , "Omar" , "Othman" , "Amani" , "Samia"];

// [AdminIndex] variable with [for] loop =>> to know which index i should stop at. =>> to know included admins
let AdminIndex;
for(AdminIndex=0 ; AdminIndex<MyAdmins.length ; AdminIndex++){
    if(MyAdmins[AdminIndex] === "Stop")
        break;                          // when break  =>>  [a] = 3
}

document.write(`<div> We have ${AdminIndex} admins </div> <hr/>`);

// loop on admin array =>> main loop
for(let AdminIncludedIndex=0 ; AdminIncludedIndex<AdminIndex ; AdminIncludedIndex++){

    document.write( `the admin for team ${AdminIncludedIndex+1} is: ${MyAdmins[AdminIncludedIndex]}` );
    document.write(`<h3> Team Members </h3>`);

    // variable contains first letter of admin
    let FirstLetterOfAdmin = MyAdmins[AdminIncludedIndex][0];

    // loop on employee array   =>> nested loop
    for(let EmployeeIndex = 0; EmployeeIndex<MyEmployees.length ;EmployeeIndex++){
        // comparing first letter for each employee with first letter of specific admin =>> to check first letter is matched
        if(MyEmployees[EmployeeIndex][0] === FirstLetterOfAdmin){
            document.write(`<p> [${[EmployeeIndex+1]}] ${MyEmployees[EmployeeIndex]} </p>`);
        }
    }

    document.write(`<hr/>`);
}