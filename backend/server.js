//import and use express
const express = require('express');
const app = express();

const port = 3030;


//test function to return a hardcoded array in json
app.get('/test', function(req,res) {

	var temp = ["one",  "two"];
	res.json(temp);
});

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://username:password@cluster0-5ecpi.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  client.close();
  // perform actions on the collection object
});
console.log("connected");

app.get('/write=:text', function(req,res) {
	console.log("write happened");
	console.log(req.params.text);
	const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
	  const collection = client.db("test").collection("devices");
	  collection.findOneAndUpdate( {"_id": "TestString1"},{$set: {"text": req.params.text} } );
	  client.close();
	});
	res.json(req.params);
});

var server = app.listen(port, function(){});
