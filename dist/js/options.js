function refresh() {
    chrome.storage.local.get(['attachInput', 'attachTextarea', 'key'], function (result) {
        document.getElementById('attach-to-input').checked = result.attachInput;
        document.getElementById('attach-to-textarea').checked = result.attachTextarea;
        document.getElementById('key').value = result.key;
    });
}
refresh();


chrome.tabs.executeScript({
    file: 'dist/js/content.js'
});
chrome.tabs.insertCSS({
    file: 'dist/css/dropdown.min.css'
});
    
document.getElementById('attach-to-input').addEventListener('change', function(){
    chrome.storage.local.set({attachInput: document.getElementById('attach-to-input').checked}, function() {
        refresh();
    });
});
document.getElementById('attach-to-textarea').addEventListener('change', function(){
    chrome.storage.local.set({attachTextarea: document.getElementById('attach-to-textarea').checked}, function() {
        refresh();
    });
});
document.getElementById('key').addEventListener('blur', function(){
    chrome.storage.local.set({key: document.getElementById('key').value}, function() {
        refresh();
    });
});

chrome.browserAction.setIcon({path:"icon.png"});