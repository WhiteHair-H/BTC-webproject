// login
var email = document.getElementById('inputEmail3').value;
var pass = document.getElementById('inputPassword3').value;

console.log(email)
console.log(pass)

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'dana',
    password: '1234',
    database: 'testdb'
});

var select = `select * from users ('${email}','${pass}');`

connection.connect();

connection.query(select, function (error, results, fields) {
    if (error) {
        console.log(error);
    }

    if (email == results[0].email || pass == results[0].pass) {
        console.log('로그인 성공');

        email = result.email;
        pass = result.pass;
        req.session.save(function () {
            res.render('index', {
                email: result.email,
                pass: results.pass,
            })
        })

    } else {
        console.log('로그인 실패');
        res.render('/login_post');
    }
});

connection.end();
