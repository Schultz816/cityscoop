// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require Note schema
var Video = require("./models/Video");

// Create a new express app
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//specifying the public folder which will keep index page and css
app.use(express.static("./public"));

// -------------------------------------------------

// MongoDB configuration
// mongoose.connect("mongodb://admin:happycoding@ds157702.mlab.com:57702/heroku_nmwxfkzn");
// var db = mongoose.connection;

// db.on("error", function(err) {
//   console.log("Mongoose Error: ", err);
// });

// db.once("open", function() {
//   console.log("Mongoose connection successful.");
// });

// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// This is the route we will send GET all saved video-notes
app.get("/api/saved", function(req, res) {

  Video.find({})
  // .sort([
  //   ['date', 'descending']
  //     ]).limit(5)
  .exec(function(err, doc) {

    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
  console.log("You visited the saved route!");
});

// This is the route we will send GET all saved video-notes
app.get("/api/saveduser", function(req, res) {

  User.find({})
  // .sort([
  //   ['date', 'descending']
  //     ]).limit(5)
  .exec(function(err, doc) {

    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
  console.log("You visited the saved route!");
});

// This is the route we will send POST requests to save each video-note
//THIS NEEDS TO BE UPDATED!!
app.post("/api/saved", function(req, res) {

  var newVideo = new Video({
      title: req.body.username,
      author: req.body.password,
      categories: req.body.email,
      location: req.body.email,
      url: req.body.favoritevids,
      meta: req.body.uploadedvids,
      data: req.body.uploadedvids
  });
  console.log(req.body);

  newVideo.save(function(err, doc){
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  })
  console.log("You made a post request");
});

// This is the route we will send POST requests to save each user
app.post("/api/saveduser", function(req, res) {

  var newUser = new User({
      username: req.body.username,
      password: req.body.password,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      favoritevids: req.body.favoritevids,
      uploadedvids: req.body.uploadedvids
  });
  console.log(req.body);

  newUser.save(function(err, doc){
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  })
  console.log("You made a post request");
});

app.delete('/api/saved/:id', function(req, res){

    Video.findByIdAndRemove(req.params.id, 
    function(error, note){
      res.send({id: video._id});
    });
  });

// -------------------------------------------------

// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
