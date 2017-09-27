var express = require('express')
var app = express()
var port = 3000;
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello prabhu')
})

app.listen(port, function() {
  console.log("Server listening in Port:" + port);
})
