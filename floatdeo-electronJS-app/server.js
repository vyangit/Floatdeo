const express = require('express');

function serverUp() {
    let app = express();

    app.use(express.static(__dirname))
    app.get('/', function(req, res) {
        res.sendFile('index.html')
    });

    server = app.listen(0);
    return server.address().port;
}

module.exports.serverUp = serverUp;
