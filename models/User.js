var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema ({
	username: {
		type: String, unique: true
	},
	password: {
		type: String
	},
	firstname: {
		type: String
	},
	lastname: {
		type: String
	},
	email: {
		type: String
	},
	favoritevids: {
		type: String
	},
	uploadedvids: {
		type: String
	}
});

var User = mongoose.model("User", UserSchema);
module.exports = User;