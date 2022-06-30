const mysql = require('mysql'); // mysql 모듈 로드  test
const conn = { // mysql 접속 설정
    host: 'localhost',
    port: '3306',
    user: 'user',
    password: 'pw',
    database: 'monolithic'
};