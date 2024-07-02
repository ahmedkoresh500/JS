/*
    * syntax of for loop    =>> on sequences
        =>> for(initial value ; condition ; update expression){
                if(){
                    statement to execute
                }
            }
*/

let MyFriends = [1 , 2 , "Osama" , "Ahmed" , "Sayed" , "Ali" , "Amira"];

for( let i=0 ; i<=MyFriends.length-1 ; i++){
    console.log( "index " + i + " = " + MyFriends[i] );
}

/*
    * last index = 6
    * index 7 =>> not found     =>> if included     =>> result = undefined
*/

console.log( "\n" );

let OnlyNames = [];
for( i=0 ; i <= MyFriends.length-1 ; i++ ){
        if(typeof MyFriends[i] === "string"){
            console.log(MyFriends[i]);
            OnlyNames.push(MyFriends[i]);
        }
}

console.log( "\n" );

console.log( OnlyNames );
