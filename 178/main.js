/*
    * Ajax: [loop on data]:

    * search on google:
        [1] [cross origin API]
        [2] [API authentication]

    * open with live server =>> to avoid [CORS policy] errors
                            =>> to avoid [rules] errors

    * onload
    * onreadystatechange    =>> [Ajax]      =>> [responseText]  = syntax error
    *                       =>> [promise]   =>> [rejected] applied only
*/
// let request1 = new XMLHttpRequest;       // two are the same
let request1 = new XMLHttpRequest();        // two are the same

// [request method] = [GET] or [POST]
request1.open("GET", "https://api.github.com/users/elzerowebschool/repos", true);
// request1.open("GET", "test.json", true);     // result = [no error]
request1.send();

request1.onreadystatechange = function(){   // anonymous function  =>> arrow function = [syntax error]
    console.log(request1.readyState);       // [request1] = object
    console.log(this.status);               // [this]  =>> refers to [object] i create from [this function]

    if(request1.readyState === 4 && request1.status === 200){   // [S] of [State] must be uppercase
    // if(this.readyState === 4 && this.status === 200){        // two are the same
        let JSObject = JSON.parse(this.responseText);           // [T] of [Text] must be uppercase
        console.log(JSObject);

        for(let i=0 ; i<JSObject.length ; i++){     // JS Object = array of objects => can use [length] attribute
            // console.log(JSObject[i]);            // first element = [index 0]

            let div = document.createElement("div");
            let repoName = document.createTextNode(JSObject[i].full_name);
            div.appendChild(repoName);
            document.body.appendChild(div);         // without document  =>> body = syntax error
        };
    };
};
