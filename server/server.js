var express = require('express'),
    db = require('./db.js'),
    bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
db.initialize();

app.get('/recipies', function(req, res){
    db.recipies.find({}).sort({ addedOn: 1}).exec(function(err, docs){
        if (err){
            res.send(err);
        } else {
            res.json(docs);
        }
    });
});

app.post('/recipies', function(req, res){
  var recipie = req.body;
  db.addRecipie(recipie);
  res.json(recipie);
});

app.use(express.static(__dirname + "/../public"));

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Server listening at http://%s:%s', host, port)

})
