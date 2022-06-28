var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'SANGMIN',
    password: '1234',
    database: 'BTCWEB'
});

connection.connect();

connection.query('SELECT * FROM users', function(error, results, fields) {
    if (error) {
        console.log(error);
    }
    console.log('The solution is: ', results);
});

connection.end();