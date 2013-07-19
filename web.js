var express = require('express');

fs= require('fs');

fs.readFile('index.html', function (err,html) {
    if (err)
    {
    }
});

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    fs.readFile('index.html','utf8', function (err, data) {
	if (err) throw err;
	console.log(data);
	response.send(data);
    });
});

var port = process.env.PORT || 8080;

app.listen(port, function() {
console.log("Listening on " + port);
});
