const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 3000;
// const db = require('./database/db.js');
const morgan = require('morang');


app.use(express.static(path.join(__dirname, './client/dist')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

app.get('/', function(req, res){

})


app.listen(PORT, function() {
    console.log(`You\'re Connected to ${PORT}!`);
})