const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    username: 'root',
    database: 'Connect4'
}).connect((err) => {
    if (err) {
        throw err;
    }
    console.log('You\'re Connected!')
})