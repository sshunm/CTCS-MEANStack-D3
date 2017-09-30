const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const port = 3000;


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello prabhu')
})


app.listen(port, function() {
  console.log("Server listening in Port:" + port);
})

