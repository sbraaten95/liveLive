var mongoose = require('mongoose');
var Room = mongoose.model('Room');

module.exports={
	add: function(request, response){
		Room.create(request.body, function(err, room){
			if(err){
				response.json(err);
			}
			else{
				response.json(room);
			}
		})
	}
}
