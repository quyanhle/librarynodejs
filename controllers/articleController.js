var Article = require('../models/article');

//display lists of articles

exports.lists = function (req, res) {
	res.send('List Articles');
}