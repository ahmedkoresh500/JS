/*
    * assignment [2]: [179:188] [D]

    * to install local server from terminal [like xampp]:
        =>> npm install -g http-server

    * run with live server  =>> to avoid [CORS policy] error

    * [request1.onload]             =>> [Ajax]
    * [request1.onreadystatechange] =>> [Ajax]      =>> [responseText]  =>> syntax error
                                    =>> [promise]   =>> [rejected] applied only
*/


// EX [2]: [using fetch]  =>> Done
async function getData3(){
    try{
        let httpResponse =  await fetch("test.json");
        console.log(httpResponse);          // [1] result = [the entire http response]

        let promise = httpResponse.json();  // [2] [.json()]  =>> convert [httpResponse] to [promise]
        console.log(promise);

        let object = await promise;         // [3] [await]  =>> convert [promise] from [pending] [fulfilled]
        console.log(object);                // [3] [await]  =>> convert [promise] to [object]
        // [await httpResponse.json();] = [await promise]
        for(let i=0 ; i<5 ; i++){
            let div = document.createElement("div");
            let h3 = document.createElement("h3");
            let p = document.createElement("p");
            let headTitle = document.createTextNode(object[i].title);
            let pDescription = document.createTextNode(object[i].description);

            p.appendChild(headTitle);
            h3.appendChild(pDescription);
            div.appendChild(h3);
            div.appendChild(p);
            document.body.appendChild(div);
        };
    }catch(rejected){ 
        console.log(rejected);
    }finally{
        console.log();
    };
};

getData3();

