/*
    * Assignment [2]:  =>> Done
*/


let request1 = new XMLHttpRequest();
request1.onload = function(){
    if(request1.readyState === 4 && request1.status === 200){
        let JSONobject = this.responseText;
        console.log(JSONobject);
        console.log("Data loaded");
    };
};
request1.open("GET", "articles.json", true);
request1.send();