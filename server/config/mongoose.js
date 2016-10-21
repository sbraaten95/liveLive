var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');

mongoose.connect('mongodb://localhost/live_live');

fs.readdirSync(path.join(__dirname, './../models')).forEach((file)=>{
	if (file.indexOf('.js') >= 0) {
		require(`${path.join(__dirname, './../models')}/${file}`);
	}
});