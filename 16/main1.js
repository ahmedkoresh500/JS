/*
    * template string   سلسله القالب
    * template literals  النموذج الحرفي

    * [console.log();]      =>> can make many spaces.
    * [document.write();]   =>> can make only one space.
    
    * i can't relate two lines with string in JS
    * but i can relate two lines with concatenation in JS
*/

let a = "we love";
let b = "javaScript";
let c = "And";
let d = "Programing";

console.log(a + " \" \" \' \' \\ " + b +
    "\n" + c + " " + d);

    
console.log(`${a}     ""''\\ ${b}
${c} ${d}`);                        // ES6

document.write(`${a}     ""''\\ ${b}
${c} ${d}`);

/*
    * [Enter]
        * [console.log();]      =>> new line 
        * [document.write();]   =>> same line 

*/