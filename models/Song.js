const mongoose = require('../db/connection');

const songSchema = new mongoose.Schema(
	{
		title:String,
		artist:String
	}

);

module.exports = mongoose.song('Song', songSchema);
