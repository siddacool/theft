/*System Variables*/ ;
var nav = document.querySelector('nav'),
    toggle = document.querySelector('#toggle'),
    back = document.querySelector('#back'),
    mainContainer = document.querySelector('#mainContainer'),
    gameContainer = document.querySelector('#gameContainer');

/*System functions*/

// url claenup
function urlCleanup() {
    if (typeof (history.pushState) != "undefined") {
        var obj = {
            Title: document.title,
            Url: window.parent.location.pathname
        };
        history.pushState(obj, obj.Title, obj.Url);
    } else {
        window.parent.location = window.parent.location.pathname;
    }
}

// load game partials
function insertGame(value) {
    var request = new XMLHttpRequest();
    request.open('GET', '../games/' + value + '.html', true);

    // send response
    function responseToSend() {
        var getGameContainer = gameContainer;
        getGameContainer.innerHTML = request.responseText;
    }

    request.onreadystatechange = function (anEvent) {
        if (request.readyState == 4) {
            if (request.status == 200) {
                responseToSend();
                afterAjaxLoaded();
            }
        }
    };
    request.send(null);
}