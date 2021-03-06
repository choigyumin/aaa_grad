var express = require('express');

var app = express();
var friend = require('./lib/friend.js');
app.use(express.static(__dirname + '/public'));


//Handlebar view engine settings
var handlebars = require('express-handlebars')
  .create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


app.set('port', process.env.PORT || 3000);

//Test Functions On and Off
app.use(function(req, res, next) {
	res.locals.showTests = app.get('env') !== 'production' &&
		req.query.test === '1';
	next();
});


//home page
app.get('/', function(req, res){
	res.render('home');
});

//About page
app.get('/about', function(req, res){
	res.render('about', { 
		friend: friend.getFriend(), 
		pageTestScript: '/qa/tests-about.js'
	});
});

//cross check
app.get('/menus/gongji', function(req, res){
	res.render('menus/gongji');
});
app.get('/menus/chun-kee', function(req, res){
	res.render('menus/chun-kee');
});

app.get('/menus/request-group-rate', function(req, res){
	res.render('menus/request-group-rate');
});

//custom 404
app.use(function(req, res){
  res.status(404);
  res.render('404');
});

//custom 500
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
  console.log( 'SSH connect on 123.142.172.150:2043');
});


