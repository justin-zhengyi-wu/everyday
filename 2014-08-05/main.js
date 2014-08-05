var loopEntriesButton = document.getElementById('le');
var loopEntriesButton2 = document.getElementById('le2');
var loopEntriesButton3 = document.getElementById('le3');

loopEntriesButton.addEventListener('click', function(e) {
    chrome.fileSystem.chooseEntry({type: 'openDirectory'}, function(Entry) {
        Entry.getDirectory('new_folder', {
            create: true,
            exclusive: true
        }, function(subEntry) {
            //We'll do something with subEntry later
        }, errorHandler);
        Entry.getFile('log.txt', {
            create: true,
            exclusive: true
        }, function(fileEntry) {
            //
        }, errorHandler);
    });
});

loopEntriesButton2.addEventListener('click', function(e) {
    chrome.fileSystem.chooseEntry({
        type: 'saveFile',
        suggestedName: 'log.txt'
    }, function(fileEntry) {

    });
});

loopEntriesButton3.addEventListener('click', function(e) {
    chrome.fileSystem.chooseEntry({type: 'openDirectory'}, function(Entry) {
        Entry.getDirectory('new_folder', {}, function(subEntry) {
            subEntry.removeRecursively(function(){
                console.log('Directory has been removed.');
            }, errorHandler);
        }, errorHandler);

        Entry.getFile('log.txt', {}, function(fileEntry) {
            fileEntry.remove(function(){
                console.log('File has been removed.');
            }, errorHandler);
        }, errorHandler);
    });
});


function errorHandler(e){
    console.log(e.message);
}

