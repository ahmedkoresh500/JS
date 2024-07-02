/*
    * variable.charAt() =>> accept 0 and positive indexes only
                        =>> negative index =>> empty string

    * variable.search(value, start-index) = variable.indexOf(value, start-index)
                    output  =>> found       = index of first letter of the word
                            =>> not found   = -1
*/

// challenge [1]  =>>  turn next code into =>> conditional ternary operator =>> if  المختصره
// write with [conditional ternary if operator]
let a = 10;
if( a < 10 ){
    console.log(10);
}else if( a>=10 && a<=40 ){
    console.log( "10 to 40" );
}else if( a>40 ){
    console.log( ">40" );
}else{
    console.log( "UnKnown" );
}

// solution
a<10 ? console.log(10) : a>=10 && a<=40 ? console.log("10 to 40") : a>40 ? console.log(">40") : "UnKnown";


// challenge [2] first way solution
let st = "Elzero Web School";
if( (st.length * st.indexOf("z")).toString() === "34" ){
    console.log( "Good challenge 2 first solution" );
}

// challenge [2] second way solution
if( (st.length + st.length).toString() === "34" ){
    console.log( "Good challenge 2 second solution" );
}

// challenge [2] third way solution
if( typeof st === typeof "34" ){
    console.log( "Good challenge 2 third solution" );
}

// challenge [3]
// [W] position may change =>> dynamic not static
if( st.charAt(st.indexOf("W")) === "W" ){
    console.log("Good challenge 3");
}

//challenge [3] in different ways =>> not specified by elzero
// includes()   =>> result = [true or false]
if( st.includes("W") ){
    console.log( "good W found in challenge 3" );
}

// challenge [4]
if( typeof st.length !== "string"){
    console.log( "Good challenge 4" );
}

// challenge [5]
if( typeof st.length === "number"){
    console.log( "Good chsllenge 5" );
}

// challenge [6]
if( st.substr(0 , 6).repeat(2) === "ElzeroElzero"){
    console.log( "Good challenge 6" );
}



console.log( "\n\n" );

console.log( st.search("i") );
console.log( st.indexOf("i") );
/*
    * search() = indexOf()
        =>> output  =>> found     = index of first letter of the word
                    =>> not found = -1
*/

console.log(st.charAt(-1));
// variable.charAt()    =>> accept 0 and positive indexes only
//                      =>> negative index =>> empty string

console.log( st.includes("W") );    // result true

console.log( typeof (st /3) );

