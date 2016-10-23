var express = require('express');
var app = new express();
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  app.render('hello.ejs', {title: 'hello'});

});

app.listen( 3000, function(){
  console.log('server is listening');
});
