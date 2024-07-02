/*
    * assignment [2]: [115:122] [D]
*/


let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];


// Write Your Destructuring code Here
let [a, b, c, [d, e, [f, g]]] = mySkills;


console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);
// result = [My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel]