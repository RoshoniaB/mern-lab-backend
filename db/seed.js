const Song = require('../models/Song');

const seedData = require('./seed.json');

Song.remove({})
	.then(() => {
		return Song.collection.insert(seedData);
	})
	.then(() => {
		process.exit();
	});
