/*Ui Functions*/
/*depending on system variables*/

// Nav Toggle
(function navToggle() {
    toggle.addEventListener('click', function () {
        // nav focus
        var ul = nav.querySelector('ul'),
            li = ul.querySelectorAll('li')[0],
            anchor = li.querySelector('a'),
            anchorAll = ul.querySelectorAll('a');
        //loop through anchors
        function loopAnchors() {
            for (i = 0; i < anchorAll.length; i++) {
                anchorAll[i].classList.remove('focus');
            }
        }
        // Toggle Nav
        if (nav.classList.contains('active')) {
            loopAnchors();
            nav.classList.remove('active');
        }
        else {
            nav.classList.add('active');
            //check for active list item
            if (!ul.querySelector('a.active')) {
                loopAnchors();
                anchor.classList.add('focus');
            }
            else {
                anchor.classList.remove('focus');
                ul.querySelector('a.active').classList.add('focus');
            }
        }
    });
})();
// insert games on Nav option click
(function insertGameOnNavClick(){
    var navOptions = nav.querySelectorAll('a');
    
    for (i = 0; i < navOptions.length; i++){
        navOptions[i].addEventListener('click',function(){
            var optionsHref = this.getAttribute('href'),
                gameId = optionsHref.slice(1),
                gameString = gameId.toString();
            
            navOptCleanup();
            this.classList.add('active');
            mainContainer.classList.add('hide');
            gameContainer.classList.add('show');
            gameContainer.classList.remove('cheats');
            
            clearGames();
            insertGame(gameString);
        })
    }
})();
// Nav hover
(function navHover(){
    var navOptions = nav.querySelectorAll('a'),
        ul = nav.querySelector('ul'),
        anchorAll = ul.querySelectorAll('a');
    
    function loopAnchors() {
            for (i = 0; i < anchorAll.length; i++) {
                anchorAll[i].classList.remove('focus');
            }
    }
    
    for (i = 0; i < navOptions.length; i++){
        navOptions[i].addEventListener('mouseover',function(){
            loopAnchors();
            this.classList.add('focus');
        })
    }
})();

// show gameContainer and insert games
(function showGameContainer() {
    var gameList = mainContainer.querySelector('.gameList'),
        gameCard = gameList.querySelectorAll('a.game');

    for (i = 0; i < gameCard.length; i++) {
        gameCard[i].addEventListener('click', function () {
            var gameId = this.getAttribute('href').slice(1),
                idString = gameId.toString();

            mainContainer.classList.add('hide');
            gameContainer.classList.add('show');

            // insert games based on id's
            navOptActive(idString);
            insertGame(idString);

        });
    }
})();

// insert games based on Url
(function insertGameOnUrl(){
    
    if(window.location.href.indexOf('#') > -1 ){
        var getUrl = window.location.href,
            gameId = getUrl.split('#').pop(),
            idString = gameId.toString();
        
        mainContainer.classList.add('hide');
        gameContainer.classList.add('show');
        
        navOptActive(idString);
        insertGame(idString);
    }
    
})();

// back button
(function backToGameList(){
    back.addEventListener('click',function(){
        if(back.hasAttribute('href')){
            
        }
        else{
           if(window.location.href.indexOf('#') > -1 ){
               if(gameContainer.classList.contains('cheats')){
                   var cheatGroupSubHolder = document.querySelectorAll('.cheatGroupSubHolder');
                       
                       for(i=0;i<cheatGroupSubHolder.length;i++){
                           cheatGroupSubHolder[i].classList.remove('hide');
                           cheatGroupSubHolder[i].classList.remove('expand');
                       }
                       gameContainer.classList.remove('cheats');
               }
               else{
                    mainContainer.classList.remove('hide');
                    gameContainer.classList.remove('show');
               
                    urlCleanup();
                    navOptCleanup();
                    clearGames();
               }
              
           }
           else{
               toggle.click();    
           }
        }
    });
})();

// Logo Button
(function logoClick() {
    logo.addEventListener('click', function () {
        if (back.hasAttribute('href')) {

        } 
        else {
            mainContainer.classList.remove('hide');
            gameContainer.classList.remove('show');
            gameContainer.classList.remove('cheats');

            urlCleanup();
            navOptCleanup();
            clearGames();
        }

    });
})();

// keyboard Navigation 
var key = {};

// detect keys
key.detect = (function () {
    console.log('key detection active');
    document.onkeydown = function (e) {
        console.log('keyCode = ' + e.keyCode);
    }
});
// keys config
key.backspace = 8;
key.enter = 13;
key.tab = 9;
key.home = 36;
key.arrow = {};
key.arrow.up = 38;
key.arrow.down = 40;
key.arrow.left = 37;
key.arrow.right = 39;
key.alpha = {};
key.alpha.w = 87;
key.alpha.s = 83;
key.alpha.a = 65;
key.alpha.d = 68;
key.alpha.t = 84;
key.alpha.f = 70;
key.alpha.i = 73;

// nav focus prev
function navFocusPrev() {
    if (nav.classList.contains('active')) {
        var totalGames = 6,
            ul = nav.querySelector('ul'),
            li = ul.querySelectorAll('li')[totalGames - 1],
            anchor = li.querySelector('a'),
            anchorAll = ul.querySelectorAll('a'),
            anchorFocus = ul.querySelector('a.focus'),
            target = anchorFocus.parentElement.previousElementSibling;
        //loop through anchors
        function loopAnchors() {
            for (i = 0; i < anchorAll.length; i++) {
                anchorAll[i].classList.remove('focus');
            }
        }

        if (!target) {
            anchor.classList.add('focus');
            anchorFocus.classList.remove('focus');
        }
        else {
            target.querySelector('a').classList.add('focus');
            anchorFocus.classList.remove('focus');
        }
    }
}

// nav focus next
function navFocusNext() {
    if (nav.classList.contains('active')) {
        var ul = nav.querySelector('ul'),
            li = ul.querySelectorAll('li')[0],
            anchor = li.querySelector('a'),
            anchorAll = ul.querySelectorAll('a'),
            anchorFocus = ul.querySelector('a.focus'),
            target = anchorFocus.parentElement.nextElementSibling;
        //loop through anchors
        function loopAnchors() {
            for (i = 0; i < anchorAll.length; i++) {
                anchorAll[i].classList.remove('focus');
            }
        }

        if (!target) {
            anchor.classList.add('focus');
            anchorFocus.classList.remove('focus');
        }
        else {
            target.querySelector('a').classList.add('focus');
            anchorFocus.classList.remove('focus');
        }
    }
}

// anchor Active
function anchorActive() {
    if (nav.classList.contains('active')) {
        var ul = nav.querySelector('ul'),
            anchorFocus = ul.querySelector('a.focus');
        
        anchorFocus.click();
        anchorFocus.classList.add('active');
    }
}

// Key bindings
document.onkeydown = function(e) {
    switch (e.keyCode || e.which) {
        case key.backspace:
            back.click();
            break;
        case key.alpha.t:
        case key.tab:
            toggle.click();
            break;
        case key.alpha.w:
        case key.arrow.up:
            navFocusPrev();
            break;
        case key.alpha.s:
        case key.arrow.down:
            navFocusNext();
            break;
        case key.enter:
        case key.alpha.f:
            anchorActive();
            break;
        case key.home:
            logo.click();
            break;
        case key.alpha.i:
            document.querySelector('#about').click();
            break;
    }
};
// About
(function aboutInfo() {
    var about = document.querySelector('#about'),
        close = document.querySelector('#aboutClose');

    about.addEventListener('click', function () {
       var parentDom = this.parentElement,
           aboutPara = parentDom.querySelector('p');
        
        aboutPara.classList.add('show');
        this.classList.add('close');
    });

    close.addEventListener('click', function () {
       var aboutPara = this.parentElement.parentElement;
        
        aboutPara.classList.remove('show');
        about.classList.remove('close');
    });
})();