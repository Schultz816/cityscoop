var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var VideoSchema = new Schema ({
	title: {
		type: String
	},
	categories: {
    	gayborhood: ,
    	restaurants:
    	sightseeing:
    	events:
    }, 
	location: {
		type: String
	}
});

var Video = mongoose.model("Video", VideoSchema);
module.exports = Video;