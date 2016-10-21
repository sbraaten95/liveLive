var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'bower_components')));

require('./server/config/mongoose.js');

var server = app.listen(8000, () => {
	console.log('listening 8000');
});

require('./server/config/emits.js')(server);