var express = require('express');
var router = express();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
var myLogger = function (req, res, next) {
	console.log('Writing Log');
	next();
}
//log time of the request

router.use(function (req, res, next) {
	console.log('A new request received at: ' + Date.now());
	next();
});
var requestTime = function (req, res, next) {
  req.requestTime = Date.now();
  next();
}
router.use(myLogger);
router.use(requestTime);


router.get('/', function(req, res){
	res.redirect('/catalog');
});

router.get('/firstview', function(req,res) {
	res.render('first_view');
});

router.get('/about', function(req, res){
  res.render('about', {
    title: 'About'
  });
});

router.get('/contact', function(req, res){
  res.render('contact', {
    title: 'Contact'
  });
});



module.exports = router;
