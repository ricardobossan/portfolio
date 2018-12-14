var express = require('express');
var app = express();
var path = require('path');
let PORT = process.env.PORT || 7000;

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/'));
});

app.listen(7001);