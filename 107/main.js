/*
    * BOM: [window.open()] & [window.close()]
        [1] window.open("URL"[opt], "target attribute"[opt], window features[opt], history[opt] )

            [1] URL                             =>> [about:blank]       =>> default
            [2] target: in [<a>] anchor tag     =>> [_blank]            =>> default
                                                =>> [_self]

            [3] window features   =>>  [width] [height] [top] [left]
            [4] history           =>> like [window.location.replace()]

        [2] window.close()

    * must use [window.open()]  =>> before using [window.close()]

    * search on google:
        [window.open() window features]
*/

setTimeout(function () {
    window.open("https://www.google.com", "_blank", "width=700, height=500, top=100, left=300");  // [px] not written
}, 2000);

// best try in console  =>> must use [window.open()] before using [window.close()]
// window.close();


