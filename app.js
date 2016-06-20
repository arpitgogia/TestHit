var express = require('express');
var app = express();
app.get('/', function(req, res) {
    console.log('API Invoked#');
    res.send('API Invoked');
});
var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log('Port ' + port + ' active');
});