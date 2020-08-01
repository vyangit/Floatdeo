const express = require('express');

function serverUp() {
    let port = 3990;
    let server = express();

    server.use(express.static(__dirname))
    server.get('/', function(req, res) {
        res.sendFile('index.html')
    });

    server.listen(port);
    return port;
}

module.exports.serverUp = serverUp;
