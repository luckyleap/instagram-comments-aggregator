var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

var client_id = '32d128ab031b4d2cbe05514ff83926a7'
var redirect_uri = 'http://localhost:3000/callback'

app.get('/', function(req, res){
  var redirect_str = 'https://api.instagram.com/oauth/authorize/?client_id=' + client_id + '&redirect_uri=' + redirect_uri + '&response_type=token';
  res.redirect(redirect_str);
});

app.get('/callback', function(req, res) {
  res.sendfile('index.html');
})

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});
