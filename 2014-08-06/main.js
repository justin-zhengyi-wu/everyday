var loopEntriesButton = document.getElementById('le');

loopEntriesButton.addEventListener('click', function(e) {
    chrome.fileSystem.chooseEntry({
        type: 'saveFile',
        suggestedName: 'log.txt'
    }, function(fileEntry) {
        fileEntry.createWriter(function(fileWriter) {
            fileWriter.write(new Blob(['Hello World'], {type: 'text/plain'}));
            fileWriter.onwrite = function(){
                console.log('Write begin.');
            };
            fileWriter.onwriteend = function(){
                console.log('Write complete.');
            };
        }, errorHandler);
    });
});

function errorHandler(e){
    console.log(e.message);
}

