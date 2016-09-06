/*System Variables*/ ;
var nav = document.querySelector('nav'),
    toggle = document.querySelector('#toggle').querySelector('a'),
    back = document.querySelector('#back').querySelector('a'),
    logo = document.querySelector('#logo').querySelector('a'),
    mainContainer = document.querySelector('#mainContainer'),
    gameContainer = document.querySelector('#gameContainer'),
    gamesUrl = rootUrl + 'games/';

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

// Nav option select
function navOptCleanup(){
    var navOptions = nav.querySelectorAll('a');
    
    for (i = 0; i < navOptions.length; i++){
        navOptions[i].classList.remove('active');
    }
}
function navOptActive(value){
    var navOptActive = document.querySelector('#nav-' + value);
    
    navOptCleanup();
    // redirect to root on wrong url
    if(!navOptActive){
        window.location= rootUrl;
    }
    else{
        navOptActive.classList.add('active');   
    } 
}

// load game partials
function insertGame(value) {
    var request = new XMLHttpRequest();
    request.open('GET', gamesUrl + value + '.html', true);

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

// Clear game partials
function clearGames(){
    gameContainer.innerHTML = '';
}