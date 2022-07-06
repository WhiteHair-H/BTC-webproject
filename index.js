var express = require('express');
var app = express();
const path = require('path');
var port = 8001;
const session = require('express-session')

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
const { Router } = require('express');
//const { Client } = require('socket.io/dist/client');
//const { Client } = require('socket.io/dist/client');
app.use(express.static('public')); //.................클라이언트의 연결 요청이 들어오면 public 폴더에서 index.html 파일을 찾아 클라이언트한테 줌.
app.get('/:id', function (req, res) { //...............(경로, 함수) 경로로 get 요청이 들어오면 함수를 실행
    let id = req.params.id; //........................동적요청 요청에 대한 파라미터 request 데이터를 id에 대입.

    // views/login.html을 입력하지 않을 경우 path 타입이 string으로 보내야한다는 오류가 발생함.
    res.sendFile(path.join(__dirname, links[id]), "/public/index.html"); // sendfile를 이용해서 id를 보내고 login.html 파일 요청
});
/*ajax end*/


// 회원가입
// DB Insert
// TODO : 비밀번호 확인 함수
app.post('/dbinsert_post', function (req, res) {
    // html name 값을 변수에 삽입
    var name = req.body.inputName;
    var mail = req.body.inputEmail3;
    var phone = req.body.inputPhone;
    var pass = req.body.inputPassword3;
    var com = req.body.gridRadios;

    // 모든 정보를 입력하지 않았을 때 메시지 박스 띄우기
    if (!name || !mail || !phone || !pass) {

        // 한글 깨짐 방지
        res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
        // 메시지 박스 띄움
        res.write("<script>alert('모든 정보를 입력해주세요.')</script>")
        // 메시지 박스가 띄워지고 나서 제자리로 돌아감
        return res.write("<script>window.location=\"/membership\"</script>");
    }

    // DB 커넥션 생성후 자신이 생성한 호스트, 유저, 비번, DB 입력
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'dana',
        password: '1234',
        database: 'testdb'
    });

    // DB 커넥션 연결
    connection.connect();

    // DB insert 구문 변수 저장
    var insert = `insert into users values ('${name}','${mail}','${phone}','${pass}','${com}');`

    connection.query('SELECT * FROM users WHERE u_mail = ?', [mail], function (error, results, fields) {
        if (results.length == 0) {
            // 한글 깨짐 방지
            res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
            res.write("<script>alert('회원가입성공')</script>");

            // DB 쿼리 작성과 에러가 발생하면 에러 로그 출력
            connection.query(insert, function (error, results, fields) {
                if (error) {console.log(error);} 
            });
            res.write("<script>window.location=\"/login\"</script>");

            if (error) {console.log(error);}
            
        }else{
            res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
            res.write("<script>alert('회원가입실패')</script>");
            res.write("<script>window.location=\"/membership\"</script>");
        }
    })
})


// 로그인
// DB Select
app.post('/login_post', function (req, res) {
    // 이메일과 비번 name 변수값 저장
    var mail = req.body.inputEmail3;
    var pass = req.body.inputPassword3;
    var com = req.body.gridRadios

    // 이메일과 비번 입력값 출력(입력값이 제대로 출력되는 테스트)
    console.log(mail, pass)

    // DB 커넥션 생성
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'dana',
        password: '1234',
        database: 'testdb'
    });

    // DB 커넥션 연결
    connection.connect();

    // 입력값의 메일과 비번을 비교하여 로그인이 될 수 있게 만드는 구문
    // 만약 이메일과 비번, 회사의 DB 조회를 통해 입력값과 비교를 하고
    // 에러가 발생하면 에러 로그를 발생시킨 뒤
    // 결과값의 길이가 0보다 클 경우 로그인이 되도록 구성
    if (mail && pass) {
        connection.query('SELECT * FROM users WHERE u_mail = ? AND u_password = ? AND u_company = ?', [mail, pass, com], function (error, results, fields) {
            if (error) throw error;
            if (results.length > 0) {
                //req.session.loggedin = true;
                //req.session.username = username;
                //res.redirect('/');
                //res.send("<script>alert('로그인되었습니다.')</script>");
                res.send('<script type="text/javascript">alert("로그인 되었습니다."); document.location.href="/";</script>');
                res.end();
            } else {
                res.send('<script type="text/javascript">alert("로그인 정보가 일치하지 않습니다."); document.location.href="/login";</script>');
            }
        });
    } else if(!mail && !pass){
        res.send('<script type="text/javascript">alert("Email과 Password를 입력하세요!"); document.location.href="/login";</script>');
        res.end();
    } else if(!pass){
        res.send('<script type="text/javascript">alert("Password를 입력하세요!"); document.location.href="/login";</script>');
        res.end();
    }else if(!mail){
        res.send('<script type="text/javascript">alert("Email을 입력하세요!"); document.location.href="/login";</script>');
        res.end();
    }
})

app.listen(port, function () {
    console.log(`App listing as http://localhost:${port}`);
});