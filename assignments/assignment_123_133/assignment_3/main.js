/*
    * assignment [3]: [123:133] [D]
*/

let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};

// let map1;                    // = syntax error

// three ways:  =>> to iterate object
// way [1]:
let map1 = new Map();
for(let key in myInfo){
    // console.log(key, myInfo[key]);
    map1.set(key, myInfo[key]);
};
console.log(map1);
console.log(map1.size);
if(map1.has("role")){
    console.log(true);
};



// way [2]:
let map2 = new Map();
// console.log( Object.entries(myInfo) );               // result = array of arrays
for(let [key, value] of Object.entries(myInfo)){
    // console.log(key, value);
    map2.set(key, value);
};
console.log(map2);
console.log(map2.size);
if(map2.has("role")){
    console.log(true);
};



// way [3]:
let map3 = new Map();
let keys = Object.keys(myInfo);             // to get keys [from object into array] as string
for(let i=0 ; i<keys.length ; i++){
    // console.log(keys[i], myInfo[keys[i]]);
    map3.set(keys[i], myInfo[keys[i]]);
};
console.log(map3);
console.log(map3.size);
if(map3.has("role")){
    console.log(true);
};



// Needed Output
// Map(3) { 'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt' }
// 3
// true