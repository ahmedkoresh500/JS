/*
    * function: ultimate practice
    * function: advanced practice
        1- parameters
        2- default parameter
        3- rest parameter
        4- loop
        5- condition

    * FunctionName  =>> sensitive to upper and lower cases

*/

function ShowInfo(UserName = "UnKown", Age = "Unknown", HourRate = 0, Show = "Yes",  ...Skills){
    document.write(`<div>`);

    document.write(`<h2> Welcome, ${UserName} </h2>`);
    document.write(`<p> Age: ${Age} </p>`);
    document.write( `Hour Rate: $${HourRate}` );
    if(Show === "Yes"){
        if(Skills.length > 0){
            document.write(`<p> Skills = ${Skills.join(' | ')} </p>`);
        }else{
            document.write(`<p> Skills = 0 Skills </p>`);
        }
    }else{
        document.write(`<p> Skills is Hidden </p>`);
    }

    document.write(`</div>`);
}
//ShowInfo();
ShowInfo("Ahmed", 23, 20, "Yes", "HTML", "CSS", "JS" );
                                        // [Yes] =>> sensitive to upper and lower cases


