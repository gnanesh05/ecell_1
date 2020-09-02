var mongoose = require("mongoose");

var eventSchema  = new mongoose.Schema({
	name: String,
	image: String,
	description: String
});

module.exports = mongoose.model("Team", teamSchema);