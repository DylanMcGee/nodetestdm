var express = require('express');
var mysql = require('mysql');
mysql://b12b979bd038a3:67495600@us-cdbr-iron-east-05.cleardb.net/heroku_22e1c66f1166b4b?reconnect=true
var connection = mysql.createConnection({
	host: 'us-cdbr-iron-east-05.cleardb.net',
	username: 'b12b979bd038a3',
	password: '67495600',
	database: 'heroku_22e1c66f1166b4b'
});
var app = express();

app.set('port', (process.env.PORT || 5000));

app.set('views', __dirname + '/views')

app.set('view engine', 'pug');

app.get('/', function(req, res){
	var sql = 'SELECT * FROM heroku_22e1c66f1166b4b.testdbheroku';
	connection.query(sql, function(err, result, fields){
		if(err){
			console.log(err);
		}else{
			res.render('home', {
				dbinfo : result
			});
		}
	})
})

app.listen(app.get('port'), function(){
	console.log('Node app is running on port ', app.get('port'));
});

