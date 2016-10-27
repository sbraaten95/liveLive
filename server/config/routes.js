var users = require('../controllers/users.js');
var rooms = require('../controllers/rooms.js');

module.exports=(app)=>{
	app.get('/users', users.getAll);
	app.get('/users/:id', users.getOne);
	app.post('/users', users.register);
	app.post('/users/:email', users.login);
	app.get('/rooms', rooms.getAll);
	app.get('/rooms/:id', rooms.getOne);
	app.post('/rooms/:id', rooms.check)
	app.post('/rooms', rooms.add);
};