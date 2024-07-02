/*
    * conditional ternary operator =>> if  المختصره     =>> for specific cases

    [1] condition ? statement when true : statement when false
    [2] condition ? statement when true : condition ? statement when true : statement when false

    * if المختصره = ordinal if

    * ordinal if 
    [1]     if(condition){
                statement to execute
            }else{
                statement to execute
            }

    [2]     if(condition){
                statement to execute
            }elseif(condition){
                statement to execute
            }else{
                statement to execute
            }

    * [statement when true] & [statement when false]
            =>> [1] string
            =>> [2] console.log()

    * if statement condition contains:
            1- comparsion operator [>] [>=] [<] [<=] [==] [!=] [===] [!==]
            2- logical operator [&& And] [|| Or] [! Not]

    * result    =>> true
                =>> false

*/

let Name = "Mona";
let Gender = "Female";
let Age = 30;

if(Gender === "Male"){
    console.log( "Mr" );
}else{
    console.log( "Mrs" );
}


// [1] condition ? statement when true : statement when false
Gender === "Male"  ? console.log( "Mr" ) : console.log( "Mrs" );    // لوحدها
let Result = Gender === "Male" ? "Mr" : "Mrs";                      // variable في
console.log( Gender === "Male" ? "Mr" : "Mrs" );                   // console في ال  =>> no semicolon

console.log( Result );
document.write( Result );

console.log(`Hello ${Result} ${Name}`);
console.log( `Hello ${ Gender === "Male" ? "Mr" : "Mrs" } ${Name}` );
                                                                // concatenation
                                                                // template literals    النموذج الحرفي
                                                                // template string      سلسله القالب

console.log( "\n" );

// [2] condition ? statement when true : condition ? statement when true : statement when false
// Age = 30
Age<20 ? console.log("Age less than 20") : Age>20 && Age<=30 ? console.log("Age between 20 and 30") : console.log("UnKnown");

