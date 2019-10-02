//start up express to listen for calls from react
const express = require('express');
const app = express();
const port = 3030;

var server = app.listen(port, function(){});



const webSocketsServerPort = 8000;
const webSocketServer = require('websocket').server;
const http = require('http');

// Spinning the http server and the websocket server.
const servers = http.createServer();
servers.listen(webSocketsServerPort);
const wsServer = new webSocketServer({
  httpServer: servers
});


//test function to return a hardcoded array in json
app.get('/test', function(req,res) {

	var temp = ["one",  "two"];
	res.json(temp);
});


//basic vars needed for mongodb connection
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://zeyuanjiang:hihihihi1@cluster0-5ecpi.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

//initalize the connection
client.connect(err => {
  const collection = client.db("test").collection("devices");
  const changeStream =collection.watch();

  //opens stream to look for db updates on test -> collections
  changeStream.on('change', next => {
  	console.log(next.documentKey);
  	console.log('adsa');
  });

  // perform actions on the collection object
});
console.log("connected");


app.get('/write=:index-:text', function(req,res) {
	console.log("write happened");
	var objectId = "TestString".concat(req.params.index);
	var text= req.params.text;
	const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
	  const collection = client.db("test").collection("devices");
	  collection.findOneAndUpdate( {"_id": objectId} , {$set: {"text": text} } );
	  client.close();
	});
	res.json(req.params);
});

