var express = require('express');
var app = express();
var path = require('path');
var port = 8001;

/*nodejs 부트스트랩 불러오기*/
app.use(express.static(path.join(__dirname, 'www')));
app.use('/js', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'js')));
app.use('/css', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css')));

/*nodejs 이미지 불러오기*/
app.use(express.static('static'));


app.listen(port, function() {
    console.log('App listing as http://localhost:', port);
});

app.get("/", function(req, res) { //작업용페이지
    res.sendFile(__dirname + '/static/html/index.html');
})