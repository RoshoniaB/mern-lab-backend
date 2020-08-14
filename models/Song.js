const mongoose = require('../db/connection');

const SongSchema = new mongoose.Schema(
	{
		title: String,
		artist: String
	}

);

module.exports = mongoose.model('Song', SongSchema);
