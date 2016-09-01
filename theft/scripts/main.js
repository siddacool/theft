/*Ui Functions*/
/*depending on system variables*/

// Nav Toggle
(function navToggle(){
    toggle.addEventListener('click',function(){
       nav.classList.toggle('active'); 
    });
})();

// insert games based on Url
(function insertGameOnUrl(){
    
    if(window.location.href.indexOf('#') > -1 ){
        var getUrl = window.location.href,
        gameId = getUrl.split('#').pop(),
        gameString = gameId.toString();
        
        mainContainer.classList.add('hide');
        gameContainer.classList.add('show');
    
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
               }
              
           }
           else{
               nav.classList.add('active');    
           }
        }
    });
})();