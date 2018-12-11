const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000

app.use(express.static('client'));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('hello world');
})

app.post('/', function(req, res) {
    console.log(req);
    res.send()
})

app.listen(port, function() {
    console.log(`Dev app listening on ${port}!`);
})

