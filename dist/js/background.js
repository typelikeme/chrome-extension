chrome.tabs.onActivated.addListener(function(tabId, selectInfo) {
    chrome.browserAction.setIcon({path:"dist/icon-gray.png"});
});
chrome.tabs.onUpdated.addListener(function(tabId, selectInfo) {
    chrome.browserAction.setIcon({path:"dist/icon-gray.png"});
});


