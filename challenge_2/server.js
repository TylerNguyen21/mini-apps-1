const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000
const converter = require('./client/app.js')
const fs = require('fs');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});

app.use(express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.send('hello world');
})

app.post('/', upload.single('fileUpload'), function(req, res) {
    fs.readFile(req.file.path, (err, data) => {
        if (err) {
            throw err;
        } else {
            let parseObj = JSON.parse(data);
            let fileArray = [];
            const iterateThroughFile = (obj) => {
                let storage = [];
                for (var key in obj) {
                    if (key === 'children') {
                        continue;
                    }
                    storage.push(obj[key]);
                }
                fileArray.push(storage);
                if(obj.children.length > 0) {
                    for (var x = 0; x < obj.children.length; x++) {
                        iterateThroughFile(obj.children[x])
                    }
                }
                
            }
            iterateThroughFile(parseObj);
            
            converter.csvFileConverter(fileArray, (err, result) => {
              if (err) {
                  throw err;
              } else {
                res.send(result);   
              }
            });
        }
    })
   
})

app.listen(port, function() {
    console.log(`Dev app listening on ${port}!`);
})

