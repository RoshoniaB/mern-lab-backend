const mongoose = require('../db/connection');

const modelSchema = new mongoose.Schema(
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

module.exports = mongoose.model('Model', modelSchema);
