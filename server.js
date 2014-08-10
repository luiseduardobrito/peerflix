var path = require('path'),
		express = require('express'),
		app = express(),
		port = process.env.PORT || 7777;

// CORS middleware
var allowCrossDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*'); // NOT SAFE FOR PRODUCTION
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');

	next();
};

app.use(allowCrossDomain);
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port);