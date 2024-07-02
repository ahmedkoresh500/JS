/*
    * switch    =>> to control flow
                =>> more readable than if statement
                =>> not used in a wide way like if statement

    * switch    =>> compare variable with value in cases
                =>> default can come first or in middle of cases =>> but with keyword break

    * syntax:
        switch(variable){
            case value:
            case value:
                statement to execute;
                break;

            case value:
                statement to execute;
                break;

            case value:
                statement to execute;
                break;

            deault:
                statement to execute;
        }
*/

// variable =>> the same data type of cases to match [identical]


let Day = 0;        // it matches
Day = "0";          // it doesn't match

switch(Day){
    case 0 :
        console.log( "saturday" );
        break;

    case 1 :
        console.log( "sunday" );
        break;
    
    case 2 :    // multiple cases
    case 5 :    // multiple cases
        console.log( "monday" );
        break;
    
    default:
        console.log( "either different data type or no matched value" );
}