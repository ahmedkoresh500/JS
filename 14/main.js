/*
    * escape character + line continue
*/

console.log("Elzero Web School");       // [1]
console.log('Elzero Web School');       // [2]

console.log('Elzero Web "School" ');    // [3]
console.log("Elzero Web 'School' ");    // [4]

console.log("Elzero Web \"School\" ");  // [5] escape character
console.log('Elzero Web \'School\' ');  // [6] escape character

console.log("Elzero \tWeb School");     // [7] [\t]     =>> eight spaces
console.log("Elzero \Web School");      // [8] [\] only =>> doesn't make anything

console.log("Elzero \nWeb School");     
console.log("Elzero\nWeb\nSchool");     // [9] [\n]     =>> new line = break line

console.log("Elzero\
 Web\
School");                              // [10] line continue
