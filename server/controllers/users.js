var mongoose = require('mongoose');
var User = mongoose.model('User');

function UsersController (){
	this.getAll=(req,res)=>{
		User.find({}, (err, users)=>{
			if (err) {
				console.log(err);
			} else {
				res.json(users);
			}
		});
	};
	this.getOne=(req,res)=>{
		User.findOne({_id: req.params.id}, (err, user)=>{
			if (err) {
				console.log(err);
			} else {
				res.json(user);
			}
		});
	};
	this.register=(req,res)=>{
		console.log(req.body)
		var newUser = new User(req.body);
		newUser.save((err, user)=>{
			if (err) {
				res.json(err)
				console.log(err);
			} else {
				console.log(user)
				res.json(user);
			}
		});
	};
	this.login=(req,res)=>{
		console.log(req.params)
		User.findOne({email: req.params.email}, (err, user)=>{
			if (err) {
				res.json(err);
			} else {
				if (user) {
					res.json(user);
				} else {
					res.json({error: `No account with the email: ${req.params.email}`});
				}
			}
		});
	};
}

module.exports = new UsersController();