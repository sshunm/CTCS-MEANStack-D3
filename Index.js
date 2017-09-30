const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const port = 3000;
const path = require('path');

app.use(express.static(__dirname + '/Client/dist/'));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.sendfile(path.join(__dirname + '/Client/dist/index.html'));
})


app.listen(port, function() {
  console.log("Server listening in Port:" + port);
})

