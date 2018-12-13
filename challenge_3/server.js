const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const path = require('path');
const Promise = require('bluebird');

app.use(express.static(path.join(__dirname, 'compiled')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/', function (req, res, next) {
    console.log(req.body);
    next();
})

app.listen(PORT, 
    () => console.log(`Connected to ${PORT}!`)
    );
