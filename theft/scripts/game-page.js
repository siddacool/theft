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

// close cheat group
(function closeCheatGroup() {
    var tableClose = document.querySelector('#tableClose');

    tableClose.addEventListener('click', function () {
        closeCheatBook();
    })
})();
