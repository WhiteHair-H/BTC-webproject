var name = document.getElementById('inputName').value;
var mail = document.getElementById('inputEmail3').value;
var phone = document.getElementById('inputPhone').value;
var pass = document.getElementById('inputPassword3').value;
var com = document.querySelector('input[type=radio][name=gridRadios]:checked');

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