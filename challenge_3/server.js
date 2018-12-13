const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const path = require('path');


app.use(express.static(path.join(__dirname, 'compiled')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.listen(PORT, 
    () => console.log(`Connected to ${PORT}!`)
    );
