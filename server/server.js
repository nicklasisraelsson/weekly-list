var express = require('express'),
    db = require('./db.js');
var app = express()
db.initialize();

app.get('/recipies', function(req, res){
    db.recipies.find({}, function(err, docs){
        if (err){
            res.send(err);
        } else {
            res.send(JSON.stringify(docs));
        }
    });
})

app.use(express.static(__dirname + "/../public"));

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Server listening at http://%s:%s', host, port)

})
