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
	},
	getOne: function(req,res){
		Room.findOne({_id: req.params.id}, (err, room)=>{
			if (err) {
				res.json(err);
			} else {
				res.json(room)
			}
		});
	},
	check: function(req,res){
		Room.findOne({_id: req.params.id}, (err, room)=>{
			if (err) {
				console.log(err);
			} else if (room.password == req.body.password) {
				res.json(room);
			} else {
				res.json("Incorrect password!");
			}
		});
	},
	getAll: function(req,res){
		Room.find({}, (err, rooms)=>{
			if (err) {
				res.json(err);
			} else {
				res.json(rooms);
			}
		});
	},
	addVid: function(request, response){
		console.log("backend", request.body.id.videoId)
		Room.create(request.body.id.videoId, function(err, room){
			if(err){
				response.json(err);
			}
			else{
				console.log("backend controller", room)
				response.json(room);
			}
		})
	}, 
	update: function(request, response){
		console.log(request.body)
		Room.findOne({_id: request.body.room}, function(err, room){
			if(err){
				response.json(err)
			}
			else{
				room.video=request.body.video;
				room.save(function(err, room){
					if(err){
						response.json(err);
					}
					else{		
						response.json(room)
					}
				});
			}
		})
	},
}
