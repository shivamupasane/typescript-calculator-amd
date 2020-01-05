var express = require('express'),
    path = require('path'),
    app = express();

app.get('/index.html',function(req,res){
    console.log('pathn', __dirname + '/index.html');
   res.sendFile(path.join(__dirname + '/index.html')); 
});
app.get('/r.js',function(req,res){
    console.log('pathn', __dirname + '/r.js');
   res.sendFile(path.join(__dirname + '/r.js')); 
});
app.get('/app.js',function(req,res){
    console.log('pathn', __dirname + '/app.js');
   res.sendFile(path.join(__dirname + '/app.js')); 
});
app.get('/index.js',function(req,res){
    console.log('pathn', __dirname + '/index.js');
   res.sendFile(path.join(__dirname + '/index.js')); 
});

app.get('/', function(req, res) {
    res.redirect('index.html');
});

app.listen(8080);
console.log('serverstarted at 8080');