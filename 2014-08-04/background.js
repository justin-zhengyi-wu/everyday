chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('main.html', {
        'id': 'default'/*,
        'bounds': {
            'width': 542,
            'height': 360
        },
        'resizable': true,
        'frame': 'none'*/
    });
});
