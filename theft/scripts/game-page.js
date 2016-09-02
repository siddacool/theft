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

// Wait for Ajax to load game patials
function afterAjaxLoaded() {
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

    })();

}