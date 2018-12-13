const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost/checkout`, { useNewUrlParser: true });

mongoose.connection.on('open', function(){
    console.log('your connected!');
}).on('error', function(error) {
    if (error) {
        console.log('you got a error!', error);
    }
})