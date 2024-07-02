/*
    * BOM: [Alert] [confirm] [prompt]:      =>> only to know  =>> not best thing to use
        [1] alert("msg");
        [2] confirm("msg");
        [3] prompt("msg", "default msg");

    * [global scope] = [global context]
*/

// [1] [alert("msg");]:
alert("Test");              // no response  =>> only press [ok]  =>> data then appears   =>> three are the same
// window.alert("Test");    // no response  =>> only press [ok]  =>> data then appears   =>> three are the same
// this.alert("Test");      // no response  =>> only press [ok]  =>> data then appears   =>> three are the same


// [2] [confrim("msg");]:
let confirmMsg = confirm("Are you sure to delete ?");   // need response
                                                        // [ok]     =>> result = [true]
                                                        // [cancel] =>> result = [false]


console.log(confirmMsg);                // result = boolean (true or false)
if(confirmMsg === true){
    console.log("item deleted");
}else{
    console.log("item not deleted");
}


// [3] [prompt("msg, default msg");]:   [default msg]  =>> optional
let promptMsg = prompt("what is the suitable day for you ?", "write your day");
console.log(promptMsg);                                 // [ok]     =>> result = data
                                                        // [cancel] =>> result = [null]

