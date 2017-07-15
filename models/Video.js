var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var VideoSchema = new Schema ({
	title: {
		type: String
	},
	date : {
		type: Date
	},
	url: {
		type: String
	}
});

var Video = mongoose.model("Video", VideoSchema);
module.exports = Video;