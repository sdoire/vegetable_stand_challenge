var express = require('express');
var path = require('path');
var vegetableData = require('./public/assets/data/vegetables.json');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/data', function(req, res){
    res.json(vegetableData);
});

app.get('/*', function(req, res){
    var file = req.params[0] || "assets/views/index.html";
    res.sendFile(path.join(__dirname, "./public", file));
});

app.listen(app.get('port'), function(){
    console.log("Listening on port: " + app.get("port"));
});