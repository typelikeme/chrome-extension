function refresh() {
    chrome.storage.local.get(['attachInput', 'attachTextarea', 'attachContenteditable', 'key'], function (result) {
        document.getElementById('attach-to-input').checked = typeof result.attachInput == 'undefined' ? true : result.attachInput;
        document.getElementById('attach-to-textarea').checked = typeof result.attachTextarea == 'undefined' ? true : result.attachTextarea;
        // document.getElementById('attach-to-contenteditable').checked = typeof result.attachContenteditable == 'undefined' ? true : result.attachContenteditable;
        document.getElementById('key').value = typeof result.key == 'undefined' ? '' : result.key;

        let options = document.getElementById('model').options;
        found = false;
        for (var i = 0; i < options.length; ++i) {
            if (options[i].value === result.key) {
                options[i].selected = true;
                found = true;
            }
        }
        if(found && document.getElementById('key').value) {
            document.getElementById('key').disabled = true;
        } else {
            document.getElementById('key').disabled = false;
        }
    });
}
refresh();
attach();
function attach() {
    chrome.tabs.executeScript({
        file: 'dist/js/content.js'
    }, function () {
        chrome.tabs.executeScript({
            file: 'dist/js/init.js'
        });
    });
    
    chrome.tabs.insertCSS({
        file: 'dist/css/dropdown.min.css'
    });
    chrome.browserAction.setIcon({path:"icon.png"});
}

    
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
// document.getElementById('attach-to-contenteditable').addEventListener('change', function(){
//     chrome.storage.local.set({attachContenteditable: document.getElementById('attach-to-contenteditable').checked}, function() {
//         refresh();
//     });
// });
document.getElementById('model').addEventListener('change', function(){
    chrome.storage.local.set({key: document.getElementById('model').value}, function() {
        attach();
    });
});
document.getElementById('key').addEventListener('blur', function(){
    chrome.storage.local.set({key: document.getElementById('key').value}, function() {
        refresh();
    });
});