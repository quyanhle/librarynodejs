var express = require('express');
var routes = express.Router();

routes.use('/', function (req, res, next) {
	console.log('A new request received at: ' + Date.now());
	next();
});

routes.get('/:id([0-9]{5})', function (req, res) {
	// console.log(res.params.id);
	res.send('The id is ' + req.params.id);
});
routes.get('*', function (req, res) {
	res.send('invalid url');
});
module.exports = routes;