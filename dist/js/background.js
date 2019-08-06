chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript({
        file: 'dist/js/content.js'
    });
    chrome.tabs.insertCSS({
        file: 'dist/css/dropdown.min.css'
    });
});

