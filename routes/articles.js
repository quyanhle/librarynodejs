var express = require('express');
var routes = express.Router();

var article = require('../controllers/articleController');

routes.get('/', article.lists);