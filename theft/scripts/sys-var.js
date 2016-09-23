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
    // external resources (non html)
    var extRes = {};
    extRes.img = 'img/' + value + '-1x1.jpg';
    extRes.imgAlt = value;

    // send response
    function responseToSend() {
             var
            // game data initialize
            gameData = {},
            tempData = document.createElement('div'),
            // Page Containers
            pageImg = document.querySelector('#page-img'),
            pageTitle = document.querySelector('#page-title'),
            pageDesc = document.querySelector('#page-desc'),
            pageCheat_essen = document.querySelector('#page-cheat-essentials'),
            pageCheat_health = document.querySelector('#page-cheat-health'),
            pageCheat_wanted = document.querySelector('#page-cheat-wanted'),
            pageCheat_weapons = document.querySelector('#page-cheat-weapons'),
            pageCheat_vehicles = document.querySelector('#page-cheat-vehicles'),
            pageCheat_gameplay = document.querySelector('#page-cheat-gameplay'),
            pageCheat_weather = document.querySelector('#page-cheat-weather'),
            pageCheat_misc = document.querySelector('#page-cheat-misc');
        
        // game data storage
        tempData.innerHTML = request.responseText;
        gameData.header = {};
        gameData.header.img = extRes.img;
        gameData.header.imgAlt = extRes.imgAlt;
        gameData.header.title = tempData.querySelector('#game-title').textContent;
        gameData.header.desc = tempData.querySelector('#game-desc').outerHTML;
        gameData.cheats = {};
        
        // Cheat lookup
        function cheatLookup(tagretId){
            if(!tempData.querySelector(tagretId)){
                return 'inapt';
            }
            else{
                return tempData.querySelector(tagretId).outerHTML;
            }
        }
        // game data Cheat storage
        gameData.cheats.essen = cheatLookup('#game-cheat-essentials');
        gameData.cheats.health = cheatLookup('#game-cheat-health');
        gameData.cheats.wanted = cheatLookup('#game-cheat-wanted');
        gameData.cheats.weapons = cheatLookup('#game-cheat-weapons');
        gameData.cheats.vehicles = cheatLookup('#game-cheat-vehicles');
        gameData.cheats.gameplay = cheatLookup('#game-cheat-gameplay');
        gameData.cheats.weather = cheatLookup('#game-cheat-weather');
        gameData.cheats.misc = cheatLookup('#game-cheat-misc');
        
        // game data Insert
        pageImg.setAttribute('alt',gameData.header.imgAlt);
        pageImg.setAttribute('src',gameData.header.img);
        pageTitle.textContent = gameData.header.title;
        pageDesc.innerHTML = gameData.header.desc;
        // cheatbook data Insert
        pageCheat_essen.innerHTML = gameData.cheats.essen;
        pageCheat_health.innerHTML = gameData.cheats.health;
        pageCheat_wanted.innerHTML = gameData.cheats.wanted;
        pageCheat_weapons.innerHTML = gameData.cheats.weapons;
        pageCheat_vehicles.innerHTML = gameData.cheats.vehicles;
        pageCheat_gameplay.innerHTML = gameData.cheats.gameplay;
        pageCheat_weather.innerHTML = gameData.cheats.weather;
        pageCheat_misc.innerHTML = gameData.cheats.misc;
        
        // Cheat type availability
        function typeLookup(tagretId){
            if(!tempData.querySelector(tagretId)){
                return 'inapt';
            }
            else{
                return 'apt';
            }
        }
        // hide inapt cheat types
        pageCheat_essen.parentElement.setAttribute('status',typeLookup('#game-cheat-essentials'));
        pageCheat_health.parentElement.setAttribute('status',typeLookup('#game-cheat-health'));
        pageCheat_wanted.parentElement.setAttribute('status',typeLookup('#game-cheat-wanted'));
        pageCheat_weapons.parentElement.setAttribute('status',typeLookup('#game-cheat-weapons'));
        pageCheat_vehicles.parentElement.setAttribute('status',typeLookup('#game-cheat-vehicles'));
        pageCheat_gameplay.parentElement.setAttribute('status',typeLookup('#game-cheat-gameplay'));
        pageCheat_weather.parentElement.setAttribute('status',typeLookup('#game-cheat-weather'));
        pageCheat_misc.parentElement.setAttribute('status',typeLookup('#game-cheat-misc'));
        
        // state ready for Game Container
        gameContainer.setAttribute('state','ready');
        
    }

    request.onreadystatechange = function (anEvent) {
        if (request.readyState == 4) {
            if (request.status == 200) {
                responseToSend();
            }
        }
    };
    request.send(null);
}

// Clear game partials
function clearGames(){
    // Page Containers
    pageImg = document.querySelector('#page-img'),
    pageTitle = document.querySelector('#page-title'),
    pageDesc = document.querySelector('#page-desc'),
    pageCheat_essen = document.querySelector('#page-cheat-essentials'),
    pageCheat_health = document.querySelector('#page-cheat-health'),
    pageCheat_wanted = document.querySelector('#page-cheat-wanted'),
    pageCheat_weapons = document.querySelector('#page-cheat-weapons'),
    pageCheat_vehicles = document.querySelector('#page-cheat-vehicles'),
    pageCheat_gameplay = document.querySelector('#page-cheat-gameplay'),
    pageCheat_weather = document.querySelector('#page-cheat-weather'),
    pageCheat_misc = document.querySelector('#page-cheat-misc');
    
    // Revert to default values
    var cheatGroupSubHolder = gameContainer.querySelectorAll('.cheatGroupSubHolder');
    
    pageImg.setAttribute('src',"data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E");
    pageTitle.innerHTML = '&#9608&#9608&#9608&#9608&#9608&#9608';
    pageDesc.innerHTML = '&#9608&#9608&#9608 &#9608&#9608&#9608 &#9608&#9608 &#9608&#9608&#9608&#9608&#9608 &#9608&#9608&#9608 &#9608&#9608 &#9608&#9608 &#9608&#9608&#9608 &#9608&#9608&#9608 &#9608&#9608 &#9608&#9608&#9608&#9608&#9608 &#9608&#9608&#9608 &#9608&#9608 &#9608&#9608&#9608&#9608&#9608 &#9608&#9608&#9608 &#9608&#9608 &#9608&#9608 &#9608&#9608&#9608 &#9608&#9608&#9608 &#9608&#9608 &#9608&#9608';
    pageCheat_essen.innerHTML = '';
    pageCheat_health.innerHTML = '';
    pageCheat_wanted.innerHTML = '';
    pageCheat_weapons.innerHTML = '';
    pageCheat_vehicles.innerHTML = '';
    pageCheat_gameplay.innerHTML = '';
    pageCheat_weather.innerHTML = '';
    pageCheat_misc.innerHTML = '';
    
    for(var i=0;i<cheatGroupSubHolder.length;i++){
        cheatGroupSubHolder[i].classList.remove('expand');
        cheatGroupSubHolder[i].classList.remove('hide');
        cheatGroupSubHolder[i].setAttribute('status','');
    }
    
    gameContainer.setAttribute('state','disable');
}