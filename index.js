var express = require('express');
var app = express();
var port = 8001;
app.listen(port, function() {
    console.log('App listing as http://localhost:', port);
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + '/static/html/index.html');
})