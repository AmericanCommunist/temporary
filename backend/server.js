//import and use express
const express = require('express');
const app = express();

const port = 3030;


//test function to return a hardcoded array in json
app.get('/test', function(req,res) {

	var temp = ["one",  "two"];
	res.json(temp);
});

var server = app.listen(port, function(){});
