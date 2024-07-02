/*
    * array1.every( callBackFunction(element, index, array){}, this argument );

        =>> element: current element
        =>> index: index of current element
        =>> array: current array
    * [this argument]:   =>> value to use when executing callBack Function

    * [result = true]   =>> if condition is true on all elements

    * mapFunction, callBackFunction   =>> run on every element in the array


    * Object.keys(objectName);      =>> to get keys [from object into array] as string
*/

// [1]
const locations = {
    "20": "place1",
    "30": "place2",
    10: "place3",
    40: "place4",
};

let minLocation = 15;       

let locationArray = Object.keys(locations);         // to get keys [from object into array] as string
console.log(locationArray);     // [3] never ordered by insertion   =>> ordered ASC     =>> keys

locationArray = locationArray.map( n => +n );       // without equal  =>> no result   =>> two are the same
locationArray = locationArray.map( (n) => +n );     // without equal  =>> no result   =>> two are the same

console.log(locationArray);

let check = locationArray.every( function(ele){     // without equal  =>> no result
    return ele > this;
}, minLocation );
console.log(check);


