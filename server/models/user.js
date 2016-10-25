var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	alias: {type: String, required: true},
	email: {
		type: String,
		required: true,
		unique: true,
		validate: {
			validator: function(value) {
				return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(value);
			},
			message: "Email must be in correct format."
		}
	},
	password: {
		type: String,
		required: true,
		minlength: 8,
		maxlength: 32,
		validate: {
			validator: function(value) {
				return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
			},
			message: "Must be at least 8 characters, less than 33 characters, have 1 number, 1 uppercase character, and one special character."
		}
	}
});

var User = mongoose.model('User', UserSchema);