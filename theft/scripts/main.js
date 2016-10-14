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
            
            setTimeout(function(){
                nav.classList.remove('active');
            }, 100);
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
                    closeCheatBook();
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
        clearGames();
        if (back.hasAttribute('href')) {
        } 
        else {
            mainContainer.classList.remove('hide');
            gameContainer.classList.remove('show');
            gameContainer.classList.remove('cheats');

            urlCleanup();
            navOptCleanup();
        }

    });
})();

// keyboard Navigation 
document.onkeydown = function(e) {
    switch (e.keyCode || e.which) {
        case key.backspace:
            back.click();
            break;
        case key.char.t:
        case key.tab:
            toggle.click();
            break;
        case key.home:
            logo.click();
            break;
    }
};

// launch pick theme
(function launchPickTheme() {
    var launchPickTheme = document.querySelector('#launchPickTheme'),
        themeButtonHolder = document.querySelector('.themeButtonHolder'),
        themeButtons = themeButtonHolder.querySelectorAll('a');

    // launch theme picker
    launchPickTheme.addEventListener('click',function(){
        themeButtonHolder.classList.toggle('active');
    });

    /*Theme Set*/
    // Set Theme function
    function setTheme(themeName){
        var wrapper = document.querySelector('#wrapper');
        wrapper.setAttribute('theme',themeName);
        launchPickTheme.setAttribute('active-skin',themeName);
        themeButtonHolder.classList.remove('active');
    }
    // loop and apply skins
    for (var i = 0; i < themeButtons.length; i++){
        themeButtons[i].addEventListener('click',function(){
            var skinName = this.getAttribute('skin');
            setTheme(skinName);
        })
    };

})();

// insert after loading page
document.addEventListener('DOMContentLoaded', function () {
    var gameList = document.querySelector(".gameList"),
        game = gameList.querySelectorAll('.game'),
        navUl = nav.querySelector('ul'),
        navListAnchors = navUl.querySelectorAll('a');
    
    // loop and insert images
    function loopItems(item) {
        for (var i = 0; i < item.length; i++) {
            var thisGame = item[i],
                gameId = thisGame.getAttribute('id'),
                gameToken = gameId.split("-")[1],
                gameName = 'img/' + gameToken + '-1x1.jpg',
                gameImg = thisGame.querySelector('img');

            gameImg.setAttribute('src', gameName);
        }
    }

    loopItems(game);
    loopItems(navListAnchors);
});