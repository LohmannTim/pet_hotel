var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 5000
var owner = require('./routes/owner')
var pets = require('./routes/pet.js');


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/pet', pets);
app.use('/owner', owner)


app.listen(port, function() {
    console.log('listening on port', port);
});