var mongoose = require("mongoose");

var memberSchema = new mongoose.Schema({
	name: String,
	image:String,
	belong: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Team"
        }
    }
});

module.exports = mongoose.model('Member',memberSchema);