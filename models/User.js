var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema ({
	username: {
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
	},
	password: {
		type: String
	}
});

var User = mongoose.model("User", NoteSchema);
module.exports = User;