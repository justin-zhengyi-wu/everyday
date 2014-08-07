var loopEntriesButton0 = document.getElementById('le0');
var loopEntriesButton = document.getElementById('le');
var loopEntriesButton2 = document.getElementById('le2');
var loopEntriesButton3 = document.getElementById('le3');
var loopEntriesButton4 = document.getElementById('le4');
var resultDiv = document.getElementById('result');

var newEntry;

loopEntriesButton0.addEventListener('click', function(e) {
    chrome.fileSystem.chooseEntry({
        type: 'openDirectory'
    }, function(Entry) {
        newEntry = Entry;
    });
});

loopEntriesButton.addEventListener('click', function(e) {
    if (!newEntry) {
        result.innerText = 'Choose target first.';
        return;
    }
    chrome.fileSystem.chooseEntry({
        type: 'openDirectory'
    }, function(Entry) {
        Entry.copyTo(newEntry, '', function(copiedEntry){
            console.log('Entry copied.');
        }, errorHandler);
    });
});

loopEntriesButton2.addEventListener('click', function(e) {
    if (!newEntry) {
        result.innerText = 'Choose target first.';
        return;
    }
    chrome.fileSystem.chooseEntry({
        type: 'openFile'
    }, function(fileEntry) {
        fileEntry.copyTo(newEntry, '', function(copiedFileEntry){
            console.log('fileEntry copied.');
        }, errorHandler);
    });
});


loopEntriesButton3.addEventListener('click', function(e) {
    if (!newEntry) {
        result.innerText = 'Choose target first.';
        return;
    }
    chrome.fileSystem.chooseEntry({
        type: 'openDirectory'
    }, function(Entry) {
        Entry.moveTo(newEntry, '', function(movedEntry){
            console.log('Entry moved.');
        }, errorHandler);
    });
});


loopEntriesButton4.addEventListener('click', function(e) {
    if (!newEntry) {
        result.innerText = 'Choose target first.';
        return;
    }
    chrome.fileSystem.chooseEntry({
        type: 'openFile'
    }, function(fileEntry) {
        fileEntry.copyTo(newEntry, '', function(movedEntry){
            console.log('fileEntry moved.');
        }, errorHandler);
    });
});


function errorHandler(e){
    console.log(e.message);
}

