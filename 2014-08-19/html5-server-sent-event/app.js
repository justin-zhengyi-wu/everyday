if (typeof EventSource !== 'undefined') {
    var source = new EventSource('demo.php');
    source.onmessage = function(event) {
        document.getElementById('result').innerHTML += event.data + '<br />';
    };
} else {
    // Sorry, no server-sent event support.
}
