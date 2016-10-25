var users = require('../controllers/users.js');

module.exports=(app)=>{
	app.get('/users', users.getAll);
	app.get('/users/:id', users.getOne);
	app.post('/users', users.register);
	app.post('/users/:email', users.login);
	app.get('/rooms/:id', rooms.getOne);
	app.post('rooms/:id')
};