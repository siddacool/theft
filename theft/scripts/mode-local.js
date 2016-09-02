// local testing
// 'gulp','gulp openbrowser'
var rootUrl = '../';

// Confirm Local testing
// check for head > title
var websiteHead = document.querySelector('head'),
    websiteTitle = websiteHead.querySelector('title'),
    currentTitle = websiteTitle.textContent.toString();

websiteTitle.textContent = currentTitle + ' [ Local Testing ]';
