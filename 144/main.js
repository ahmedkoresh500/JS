/*
    * regular expression:

    * form validation:

*/

document.getElementById("register").onsubmit = function(){
    let phoneInput = document.getElementById("phone").value;
    // let phoneRegExp = /\(\d{4}\) \d{3}-\d{4}/ig;             // (1234) 567-8910  =>> two are the same
    let phoneRegExp = /\(\d{4}\)\s\d{3}-\d{4}/ig;               // (1234) 567-8910  =>> two are the same
    let validationResult = phoneRegExp.test(phoneInput);

    if(validationResult === false){
        return false;                       // to prevent form from sending data
    };
    return true;
};

