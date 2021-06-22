const remote = require('electron').remote;
const shell = require('electron').shell;




var pages=['login','signup','index'];


function nextPage(currentPageID) {


window.location.href = `${pages[currentPageID]}.html`;
    
}


function closeWindow() {
    window.close();
}
function openURL(url) {
    shell.openExternal(url);
}
