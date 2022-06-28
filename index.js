var express = require('express');
var app = express();
var path = require('path');
var port = 8001;

var bodyParser = require('body-parser');
var fs = require('fs'); // 파일 읽기.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname));
app.set('view engine', 'ejs');

/*nodejs 부트스트랩 불러오기*/
app.use(express.static(path.join(__dirname, 'www')));
app.use('/js', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'js')));
app.use('/css', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css')));

/*nodejs 이미지 불러오기*/
//app.use(express.static('static'));

/*ajax start*/
let links = require('./models/link'); //..............ajax링크 파일 모듈 연결 require가 모듈을 포함하는 함수이다.
app.use(express.static('public')); //.................클라이언트의 연결 요청이 들어오면 public 폴더에서 index.html 파일을 찾아 클라이언트한테 줌.
app.get('/:id', function(req, res) { //...............(경로, 함수) 경로로 get 요청이 들어오면 함수를 실행
    let id = req.params.id; //........................동적요청 요청에 대한 파라미터 request 데이터를 id에 대입.
    res.sendFile(path.join(__dirname, links[id])); // snedfile를 이용해서 id를 보냄( links 객체 내용 )
});
/*ajax end*/



app.post('/dbinsert_post', function(req, res) {
    var name = req.body.inputName;
    var mail = req.body.inputEmail3;
    var phone = req.body.inputPhone;
    var pass = req.body.inputPassword3;
    var com = req.body.gridRadios;

    var insert = `insert into users values ('${name}','${mail}','${phone}','${pass}','${com}');`

    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'SANGMIN',
        password: '1234',
        database: 'BTCWEB'
    });

    connection.connect();

    connection.query(insert, function(error, results, fields) {
        if (error) {
            console.log(error);
        }
        console.log('The solution is: ', results);
    });

    connection.end();

    res.render('mem.ejs', { 'name': req.body.inputName });
})



app.listen(port, function() {
    console.log('App listing as http://localhost:', port);
});