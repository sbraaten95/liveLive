var mongoose = require('mongoose');

var RoomSchema = new mongoose.Schema({
	name: String,
	password: String,
	video: String,
	private: Boolean
}, {timestamps: true});

var Room = mongoose.model('Room', RoomSchema);