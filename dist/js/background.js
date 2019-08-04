chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.local.set({active: 1}, function() {
        console.log('Now Active');
    });
});