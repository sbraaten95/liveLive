module.exports = function (server){
	var io = require('socket.io').listen(server);

	var time = 0;
	var id = '';

	io.sockets.on('connection', (socket)=>{

		io.emit('login');

		socket.on('passVideo', (data)=>{
			data.id = id;
			if (time > data.time) {
				data.time = time;
			} else {
				time = data.time;
			}
			socket.emit('final', (data));
		});

		socket.on('updatereq', ()=>{
			io.emit('login');
		});

		socket.on('changeid', (data)=>{
			id = data.id;
		});
	});
};