/*
    * JSON:
        [1] JSON.parse()        =>> convert [JSON object] to [JS object]
        [2] JSON.stringify()    =>> convert [JS object] to [JSON object]

    * JSON object   =>> array of objects
    * JSON object = string object = text format
*/

// JSON object
let JSONobjectFromServer = '{"userName": "Osama", "Age": 39}';
console.log(typeof JSONobjectFromServer);   // result = JSON object = string object = text format
console.log(JSONobjectFromServer);          // result = string
console.log(`${"#".repeat(30)}\n\n`);


// JS object
let JSobject = JSON.parse(JSONobjectFromServer);
console.log(typeof JSobject);               // result = JS object
console.log(JSobject);
console.log(`${"#".repeat(30)}\n\n`);

JSobject["userName"] = "Ahmed";             // bracket notation
JSobject["Age"] = 24;                       // bracket notation

let JSONobjectToServer = JSON.stringify(JSobject);
console.log(typeof JSONobjectToServer);     // result = JSON object = string object = text format
console.log(JSONobjectToServer);            // result = string

