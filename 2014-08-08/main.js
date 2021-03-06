function getMedia() {
    chrome.mediaGalleries.getMediaFileSystems({
        interactive: 'if_needed'
    }, listMediaGalleries);
}

function listMediaGalleries(fileSystemArray) {
    document.getElementById('container').innerHTML = '';
    for (var i = 0; i < fileSystemArray.length; i++) {
        var info = chrome.mediaGalleries.getMediaFileSystemMetadata(fileSystemArray[i]);
        var item = document.createElement('span');
        item.className = 'item';
        item.title = info.name;
        document.getElementById('container').appendChild(item);
        var icon = document.createElement('span');
        icon.className = 'icon';
        icon.innerHTML = '&#xf00c5;';
        item.appendChild(icon);
        var text = document.createElement('span');
        text.className = 'text';
        text.innerHTML = info.name;
        item.appendChild(text);
    }
}

getMedia();
