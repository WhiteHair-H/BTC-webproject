var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'dana',
    password: '1234',
    database: 'testdb'
});

connection.connect();

connection.query('SELECT * FROM users', function(error, results, fields) {
    if (error) {
        console.log(error);
    }
    console.log('The solution is: ', results);
});

connection.end();