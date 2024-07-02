/*
    * BOM [Browser object model] = [window object model]  =>> contains DOM

    * BOM [browser object model] members are  =>> global [properties], [methods], [objects]   

    * [properties = variables]

    * things to do with object:
        [1] open window
        [2] close window
        [3] move window
        [4] resize window

        [5] print document
        [6] run code after period of time once or more      =>> Ex [1]: counter 60 seconds before download something
                                                            =>> EX [2]: pop-up appears after period of time
        [7] fully control the URL
        [8] save data inside browser to use later

*/

console.log("Hello world 1");           // three are the same
window.console.log("Hello World 2");    // three are the same
this.console.log("Hello World 3");      // three are the same

window.document.title = "BOM JS";       // [<title> BOM JS </title>]

