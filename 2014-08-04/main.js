var loopEntriesButton = document.getElementById('le');

loopEntriesButton.addEventListener('click', function(e) {
    chrome.fileSystem.chooseEntry({type: 'openDirectory'}, function(Entry) {
        document.getElementById('loopEntry').innerText = Entry.fullPath;
        getSubEntries(0, Entry, document.getElementById('loopEntry'));
    });
});

function echoEntry(depth, Entry){
    var tree = '|';
    for(var i=0; i<depth-1; i++){
        tree += ' |';
    }
    return (tree+'-'+Entry.name);
}


function getSubEntries(depth, Entry, parent){
    var dirReader = Entry.createReader();
    dirReader.readEntries(function(Entries) {
        for(var i=0; i<Entries.length; i++){
            var newParent = document.createElement('div');
            newParent.id = Date.now();
            newParent.innerText = echoEntry(depth+1, Entries[i]);
            parent.appendChild(newParent);
            if(Entries[i].isDirectory){
                getSubEntries(depth+1, Entries[i], newParent);
            }
        }
    }, errorHandler);
}

function errorHandler(e){
    console.log(e.message);
}

