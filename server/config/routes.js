var users = require('../controllers/users.js');
var rooms = require('../controllers/rooms.js');

module.exports=(app)=>{
	app.get('/users', users.getAll);
	app.get('/users/:id', users.getOne);
	app.post('/users', users.register);
	app.post('/users/:email', users.login);
	app.post('/rooms', rooms.add);
};