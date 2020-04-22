var express = require('express');
var app = express(); 
const path = require('path');

app.get('/',function(req,res){
 res.sendFile(path.join(__dirname, 'STATIC_FILES/index.html'));
});
app.get('/about',function(req,res){
 res.sendFile(path.join(__dirname,'STATIC_FILES/about.html'));
});
app.get('/sitemap',function(req,res){
 res.sendFile(path.join(__dirname,'STATIC_FILES/sitemap.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
