function urlCleanup(){if("undefined"!=typeof history.pushState){var e={Title:document.title,Url:window.parent.location.pathname};history.pushState(e,e.Title,e.Url)}else window.parent.location=window.parent.location.pathname}function navOptCleanup(){var e=nav.querySelectorAll("a");for(i=0;i<e.length;i++)e[i].classList.remove("active")}function navOptActive(e){var t=document.querySelector("#nav-"+e);navOptCleanup(),t?t.classList.add("active"):window.location=rootUrl}function insertGame(e){function t(){var e=gameContainer;e.innerHTML=a.responseText}var a=new XMLHttpRequest;a.open("GET",gamesUrl+e+".html",!0),a.onreadystatechange=function(e){4==a.readyState&&200==a.status&&(t(),afterAjaxLoaded())},a.send(null)}function clearGames(){gameContainer.innerHTML=""}function afterAjaxLoaded(){!function(){var e=document.querySelector(".cheatGroupHolder"),t=e.querySelectorAll("a[data-cheatgroup]"),a=e.querySelector("a[data-cheatall]");for(i=0;i<t.length;i++)t[i].addEventListener("click",function(){var e=this.parentElement,t=e.parentElement,a=t.querySelectorAll(".cheatGroupSubHolder");for(j=0;j<a.length;j++)a[j].classList.add("hide"),a[j].classList.remove("expand");gameContainer.classList.add("cheats"),e.classList.remove("hide"),e.classList.add("expand")});a.addEventListener("click",function(){for(allSubHolders=e.querySelectorAll(".cheatGroupSubHolder"),gameContainer.classList.add("cheats"),j=0;j<allSubHolders.length;j++)allSubHolders[j].classList.remove("hide"),allSubHolders[j].classList.add("expand")}),function e(){var e=document.querySelector("#gamesInfo"),t=document.querySelector("#gamesInfoClose");e.addEventListener("click",function(){var e=this.parentElement,t=e.querySelector("p");t.classList.add("show"),this.classList.add("close")}),t.addEventListener("click",function(){var t=this.parentElement.parentElement;t.classList.remove("show"),e.classList.remove("close")})}()}()}var rootUrl="../theft/",nav=document.querySelector("nav"),toggle=document.querySelector("#toggle").querySelector("a"),back=document.querySelector("#back").querySelector("a"),logo=document.querySelector("#logo").querySelector("a"),mainContainer=document.querySelector("#mainContainer"),gameContainer=document.querySelector("#gameContainer"),gamesUrl=rootUrl+"games/";!function(){toggle.addEventListener("click",function(){nav.classList.toggle("active")})}(),function(){var e=nav.querySelectorAll("a");for(i=0;i<e.length;i++)e[i].addEventListener("click",function(){var e=this.getAttribute("href"),t=e.slice(1),a=t.toString();navOptCleanup(),this.classList.add("active"),mainContainer.classList.add("hide"),gameContainer.classList.add("show"),gameContainer.classList.remove("cheats"),insertGame(a),setTimeout(function(){nav.classList.remove("active")},200)})}(),function(){if(window.location.href.indexOf("#")>-1){var e=window.location.href,t=e.split("#").pop(),a=t.toString();mainContainer.classList.add("hide"),gameContainer.classList.add("show"),navOptActive(a),insertGame(a)}}(),function(){back.addEventListener("click",function(){if(back.hasAttribute("href"));else if(window.location.href.indexOf("#")>-1)if(gameContainer.classList.contains("cheats")){var e=document.querySelectorAll(".cheatGroupSubHolder");for(i=0;i<e.length;i++)e[i].classList.remove("hide"),e[i].classList.remove("expand");gameContainer.classList.remove("cheats")}else mainContainer.classList.remove("hide"),gameContainer.classList.remove("show"),urlCleanup(),navOptCleanup(),clearGames();else nav.classList.add("active")})}(),function(){logo.addEventListener("click",function(){back.hasAttribute("href")||(mainContainer.classList.remove("hide"),gameContainer.classList.remove("show"),gameContainer.classList.remove("cheats"),urlCleanup(),navOptCleanup(),clearGames())})}();var key={};key.backspace=8,key.arrow={},key.arrow.up=38,key.arrow.down=40,key.arrow.left=37,key.arrow.right=39,document.onkeydown=function(e){switch(e.keyCode){case key.backspace:back.click();break;case key.arrow.left:nav.classList.add("active");break;case key.arrow.right:nav.classList.remove("active")}},function(){var e=document.querySelector("#about"),t=document.querySelector("#aboutClose");e.addEventListener("click",function(){var e=this.parentElement,t=e.querySelector("p");t.classList.add("show"),this.classList.add("close")}),t.addEventListener("click",function(){var t=this.parentElement.parentElement;t.classList.remove("show"),e.classList.remove("close")})}(),function(){var e=mainContainer.querySelector(".gameList"),t=e.querySelectorAll("a.game");for(i=0;i<t.length;i++)t[i].addEventListener("click",function(){var e=this.getAttribute("href").slice(1),t=e.toString();mainContainer.classList.add("hide"),gameContainer.classList.add("show"),navOptActive(t),insertGame(t)})}(),function(){var e="Theft Console";console.log(e)}();