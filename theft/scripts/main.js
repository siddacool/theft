/*Ui Functions*/
/*depending on system variables*/

// Nav Toggle
(function navToggle(){
    toggle.addEventListener('click',function(){
       nav.classList.toggle('active'); 
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
    
            insertGame(gameString);
            
            setTimeout(function(){ 
                nav.classList.remove('active'); 
            }, 200);
        })
    }
})();

// insert games based on Url
(function insertGameOnUrl(){
    
    if(window.location.href.indexOf('#') > -1 ){
        var getUrl = window.location.href,
            gameId = getUrl.split('#').pop(),
            gameString = gameId.toString();
        
        mainContainer.classList.add('hide');
        gameContainer.classList.add('show');
        
        navOptActive(gameString);
        insertGame(gameString);   
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
               nav.classList.add('active');    
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
// key configuration 
var key = {};

key.backspace = 8;
key.arrow = {};
key.arrow.up = 38;
key.arrow.down = 40;
key.arrow.left = 37;
key.arrow.right = 39;
    
document.onkeydown = function(e) {
    switch (e.keyCode) {
        case key.backspace:
            back.click();
            break;
        case key.arrow.left:
            nav.classList.add('active');
            break;
        case key.arrow.right:
            nav.classList.remove('active');
            break;
    }
};

        