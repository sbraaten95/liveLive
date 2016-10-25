var mongoose = require('mongoose');

var RoomSchema = new mongoose.Schema({
	name: String,
	password: String,
	users: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

var Room = mongoose.model('Room', RoomSchema);