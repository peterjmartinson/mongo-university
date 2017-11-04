var express = require('express'),
    app = express(),
    MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + "/views");

MongoClient.connect("mongodb://localhost:27017/video", function(err, db) {

    if(err) throw err;

    console.log("Successfully connected to MongoDB.");

    app.get('/', function(req, res) {

        db.collection('movieDetails').find({}).toArray(function(err, docs) {
            if(err) throw err;

            if (docs.length < 1) {
                console.dir("No documents found. Did you forget to mongorestore?");
                return res.send("No documents found. Did you forget to mongorestore?");
            }

	    var doc = docs[0];
            return res.render(docs);
        });
    });

    app.use(function(req, res){
        res.sendStatus(404);
    });

    var server = app.listen(3000, function() {
        var port = server.address().port;
        console.log("Express server listening on port %s.", port);
    });
});
