const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    username: 'root',
    database: 'Connect4'
})

connection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('You\'re Connected!')
})

module.exports = connection;