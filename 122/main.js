/*
    * destructuring challenge: [mixed-content]
*/

let chosen = 1;
let MyFriends = [
    {Title: "Ahmed", Age: 24, available: true, Skills: ["HTML", "CSS"]},
    {Title: "Osama", Age: 39, available: false, Skills: ["Python", "Django"]},
    {Title: "Sayed", Age: 60, available: true, Skills: ["PHP", "Laravel"]},
];


if( chosen === 1 ){
    [{Title, Age, available, Skills: [ , two]}, {}, {}] = MyFriends; // if [let] =>> variables can't be read
}else if( chosen == 2 ){
    [{}, {Title, Age, available, Skills: [ , two]}] = MyFriends;     // if [let] =>> variables can't be read
}else if( chosen == 3 ){
    [{}, {}, {Title, Age, available, Skills: [ , two]}] = MyFriends; // if [let] =>> variables can't be read
}else{
    console.log("not found");
};


console.log(Title);
console.log(Age);
if( available === true ){
    console.log("available");
}else{
    console.log("not available");
}
console.log(two);


