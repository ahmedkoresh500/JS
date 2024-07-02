/*
    * BOM:
        [1] window.stop()           =>> stop loading webpage resources.
        [2] window.focus()
        [3] window.print()          = [right click + print] = [ctrl + p]

        [4] scroll(x,y | options)      =>> two are the same   =>> not supported in safari (apple)
        [5] scrollTo(x,y | options)    =>> two are the same   =>> supported in safari (apple)
        [6] scrollBy(x,y | options)

        * scroll, scrollTo(500, 200)    =>> scroll from position 0.
        * scrollBy(500, 200)            =>> scroll from current position.

        * scroll() = window.scroll()
        * scrollTo() = window.scrollTo()
        * scrollBy() = window.scrollBy()

        * EX: [best try in console]:
            [1] window.scrollTo(300, 1500)
            [2] window.scrollTo({
                    left: 300,
                    top: 1500,
                    behavior: "smooth"
                })

    * window.onload = function(){};
    * location.reload();
*/


// uncomment  =>> [new window] will be opened immediately.
// let newWindow = window.open("https://www.google.com", "_blank", "width=700, height=500, top=100, left=300");


// [3] best try in console  =>> [/109/index.html]
// newWindow.focus();
// newWindow.close();


