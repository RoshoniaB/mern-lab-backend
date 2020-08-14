const express = require('express');
const Song = require('../models/Song');
const router = express.Router();

router.get('/', (req, res) => {
	Song.find({}).then((song) => {
		res.json(song);
	});
});

router.post('/', (req, res) => {
	let newSong = req.body;
	Song.create(newSong).then(() => {
		Song.find({}).then((songs) => {
			res.json(songs);
		});
	});
});

router.put('/:id', (req, res) => {
	let updateSong = req.body;
	Song.findOneAndUpdate({ _id: req.params.id }, updateSong, {
		new: true
	}).then(() => {
		Song.find({}).then((songs) => {
			res.json(songs);
		});
	});
});

router.delete('/:id', (req, res) => {
	Song.findOneAndDelete({ _id: req.params.id }).then(() => {
		Song.find({}).then((songs) => {
			res.json(songs);
		});
	});
});

module.exports = router;
