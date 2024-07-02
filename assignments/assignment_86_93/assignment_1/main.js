/*
    * assignment [1]: [86:93] []
*/

// way [1]
let elementDiv = document.getElementById("elzero");
console.log("way [1]");
console.log(elementDiv);
console.log(`${"#".repeat(30)}\n\n`);


// way [2]
elementDiv = document.getElementsByTagName("div");
console.log("way [2]");
console.log(elementDiv[0]);
console.log(`${"#".repeat(30)}\n\n`);

// way [3]
elementDiv = document.getElementsByClassName("element");
console.log("way [3]");
console.log(elementDiv[0]);
console.log(`${"#".repeat(30)}\n\n`);


// way [4]
elementDiv = document.getElementsByName("js");
console.log("way [4]");
console.log(elementDiv[0]);
console.log(`${"#".repeat(30)}\n\n`);





// way [5]:
elementDiv = document.querySelector(".element");            // [1] calling class with [.]   =>> same calling like CSS
console.log("way [5]");
console.log(elementDiv);
console.log(`${"#".repeat(30)}\n\n`);


// way [6]:
elementDiv = document.querySelector("#elzero");             // [2] calling id with [#]      =>> same calling like CSS
console.log("way [6]");
console.log(elementDiv);
console.log(`${"#".repeat(30)}\n\n`);


// way [7]:
elementDiv = document.querySelector("div");                 // [3] by [tagName]
console.log("way [7]");
console.log(elementDiv);
console.log(`${"#".repeat(30)}\n\n`);


// way [8]
elementDiv = document.querySelector("[name='js']");         // [4] by [name] attribute
console.log("way [8]");
console.log(elementDiv);
console.log(`${"#".repeat(30)}\n\n`);


