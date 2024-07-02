/*
    * Ajax: [loop on data]:

    * search on google:
        [1] [cross origin API]
        [2] [API authentication]

    * open with live server =>> to avoid [CORS policy] error
                            =>> to avoid [rules] error

    * onload
    * onreadystatechange    =>> [Ajax]      =>> [responseText]  = syntax error
    *                       =>> [promise]   =>> [rejected] applied only
*/

let request1 = new XMLHttpRequest();


// [open method]  specifies [request method]     =>> [GET] or [POST]
request1.open("GET", "https://api.github.com/users/elzerowebschool/repos", true);
// request1.open("GET", "test.json", true);     // no error
request1.send();

request1.onreadystatechange = function(){   // anonymous function  =>> arrow function = [syntax error]
    console.log(request1.readyState);
    console.log(this.status);
    console.log("\n");

    if(request1.readyState === 4 && request1.status === 200){   // [S] of [State] must be uppercase
    // if(this.readyState === 4 && this.status === 200){        // two are the same
        let JSObject = JSON.parse(this.responseText);           // [T] of [Text] must be uppercase
        console.log(JSObject);

        for(let i=0 ; i < JSObject.length ; i++){   // JSObject =array of objects  =>> [length] can be used
            // console.log(JSObject[i]);

            let div = document.createElement("div");
            let repoName = document.createTextNode(JSObject[i].full_name);
            div.appendChild(repoName);
            document.body.appendChild(div);         // without document  =>> body = syntax error
        };
    };
};

