function refresh() {
    chrome.storage.local.get(['active', 'attachInput', 'attachTextarea', 'key'], function (result) {
        document.getElementById('active').checked = result.active;
        document.getElementById('attach-to-input').checked = result.attachInput;
        document.getElementById('attach-to-textarea').checked = result.attachTextarea;
        document.getElementById('key').value = result.key;
    });
}
refresh();

document.getElementById('active').addEventListener('change', function(){
    chrome.storage.local.set({active: document.getElementById('active').checked}, function() {
        refresh();
    });
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