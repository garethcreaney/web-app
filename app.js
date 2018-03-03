var express = require('express');
var app = express();  //use express js module

//add handlebars view engine
var handlebars = require('express-handlebars')
	.create({defaultLayout: 'main'});  //default handlebars layout page

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars'); //sets express view engine to handlebars
app.set('views', __dirname + '/views');

app.set('port', process.env.PORT || 3000);  //sets port 3000

app.get('/', function(req,res) {
	res.render('home');  //respond with homepage
});

app.get('/api', function(req,res) {
    // get some info form db
    const test = {
        name: 'Conaire',
        age: 35
    }
    console.log(test);
    res.send(test);
});

app.use(function(req,res){  //express catch middleware if page doesn't exist
	res.status(404);  //respond with status code
	res.render('404'); //respond with 404 page
});

app.listen(app.get('port'), function(){ //start express server
	console.log( 'Express Server Started on http://localhost:3000');

});