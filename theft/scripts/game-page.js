// cheat table expand
(function cheatTableExpand() {
    var cheatGroupHolder = document.querySelector('.cheatGroupHolder'),
        cheatGroup = cheatGroupHolder.querySelectorAll('a[data-cheatgroup]'),
        cheatAll = cheatGroupHolder.querySelector('a[data-cheatall]');

    for (i = 0; i < cheatGroup.length; i++) {
        cheatGroup[i].addEventListener('click', function () {
            var parentDom = this.parentElement,
                grandParent = parentDom.parentElement,
                allSubHolders = grandParent.querySelectorAll('.cheatGroupSubHolder');

            for (j = 0; j < allSubHolders.length; j++) {
                allSubHolders[j].classList.add('hide');
                allSubHolders[j].classList.remove('expand');
            }

            gameContainer.classList.add('cheats');
            parentDom.classList.remove('hide');
            parentDom.classList.add('expand');

        });
    }
    // show all cheats
    cheatAll.addEventListener('click', function () {
        allSubHolders = cheatGroupHolder.querySelectorAll('.cheatGroupSubHolder');

        gameContainer.classList.add('cheats');
        for (j = 0; j < allSubHolders.length; j++) {
            allSubHolders[j].classList.remove('hide');
            allSubHolders[j].classList.add('expand');
        }
    });
    // Game Info
    (function gameInfo() {
        var gameInfo = document.querySelector('#gamesInfo');

        gameInfo.addEventListener('click', function () {
            var parentDom = this.parentElement,
                aboutPara = parentDom.querySelector('#page-descHolder');
        
                aboutPara.classList.add('show');
                this.classList.add('close');
        });

       /* gameInfoClose.addEventListener('click', function () {
            var aboutPara = this.parentElement.parentElement;
        
            aboutPara.classList.remove('show');
            gameInfo.classList.remove('close');
        });*/
    })();

    // Game Info alt
    (function gameInfoAlt() {
           var gameInfo = document.querySelector('#gamesInfoAlt'),
               gameDesc = document.querySelector('.gameDesc'),
               aboutPara = gameDesc.querySelector('#page-descHolder');

           gameInfo.addEventListener('click', function () {
                   aboutPara.classList.toggle('show');
                   this.classList.toggle('close');
           });

           /*gameInfoClose.addEventListener('click', function () {
               aboutPara.classList.remove('show');
               gameInfo.classList.remove('close');
           });*/
       })();

})();