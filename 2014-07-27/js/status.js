function httpRequest(url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            cb(true);
        }
    };
    xhr.onerror = function() {
        cb(false);
    };
    xhr.send();
}

setInterval(function() {
    httpRequest('http://www.google.com.hk/', function(status) {
        chrome.browserAction.setIcon({
            path: 'images/' + (status ? 'online.png' : 'offline.png')
        });
    });
}, 5000);
