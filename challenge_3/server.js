const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./database/schema.js');
const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/checkout`, { useNewUrlParser: true });

mongoose.connection.on('open', function(){
    console.log('your connected!');
}).on('error', function(error) {
    if (error) {
        console.log('you got a error!', error);
    }
})

app.use(express.static(path.join(__dirname, 'compiled')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/', function (req, res, next) {
    let customerData = new db.model(req.body);
    customerData.save(function(err) {
        if (err) {
            console.log(err);
        } else {
            db.model.find(req.body, 'name', function(err, customer) {
                if (err) {
                    throw err;
                } else {
                    console.log(customer);
                }
            })
        }
    })
    res.send(customerData);
    next();
})

app.listen(PORT, 
    () => console.log(`Connected to ${PORT}!`)
    );
