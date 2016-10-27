var users = require('../controllers/users.js');
var rooms = require('../controllers/rooms.js');

module.exports=(app)=>{
	console.log("routes")
	app.get('/users', users.getAll);
	app.get('/users/:id', users.getOne);
	app.post('/users', users.register);
	app.post('/users/:email', users.login);
	app.get('/rooms', rooms.getAll);
	// app.post('/rooms/video', rooms.addVid);
	app.get('/rooms/:id', rooms.getOne);
	app.post('/rooms', rooms.add);
	app.post('/rooms/:id', rooms.check);
};