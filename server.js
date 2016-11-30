var express = require("express");
var app = express();
var mongojs = require("mongojs");
var db = mongojs("resume", ["resume"]);
var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

app.get('/resumeapp', function (req, res){

	db.resume.find(function(err, docs){
		res.json(docs);
	});

});

app.listen(8080);
console.log("server running on port 8080");