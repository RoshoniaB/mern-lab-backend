const mongoose = require('../db/connection');

const songSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: String,
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.song('Song', songSchema);
