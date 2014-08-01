function format(obj) {
    return JSON.stringify(obj, null, 4);
}


chrome.system.cpu.getInfo(function(info){
    info = format(info);
    document.getElementById('cpu').innerHTML = info;
});

chrome.system.memory.getInfo(function(info){
    info = format(info);
    document.getElementById('memory').innerHTML = info;
});

chrome.system.storage.getInfo(function(info){
    info = format(info);
    document.getElementById('storage').innerHTML = info;
});


