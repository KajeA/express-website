const path = require("path");
const express = require("express");
const ejs = require("ejs");
const pageInfo = require("./pageInfo")
const app = express();
const moment = require('moment');
const dateyear = "YYYY"
const pics = require("./pics");


app.locals.moment = require('moment');
app.locals.dateyear = dateyear
app.locals.pics = pics

app.set('view engine', 'ejs');

app.get("/",function(req, res) {
  res.render('index', pageInfo.index)
})

app.get('/bacon',function(req, res) {
  res.render('bacon', pageInfo.bacon)
})

app.get('/cheeseburger',function(req, res) {
  res.render('cheeseburger', pageInfo.cheeseburger)
})

app.get('/cupcake',function(req, res) {
  res.render('cupcake', pageInfo.cupcake)
})

app.get('/gallery',function(req, res) {
  res.render('gallery', pageInfo.gallery)
})

app.get('/gallery/:id', function (req, res) {
  app.locals.photoid = req.params.id;
  res.render('large', {});
});


app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});


