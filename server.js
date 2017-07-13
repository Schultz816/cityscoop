// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require Note schema
var Note = require("./models/Note");

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
mongoose.connect("mongodb://admin:happycoding@ds157702.mlab.com:57702/heroku_nmwxfkzn");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// This is the route we will send GET all saved video-notes
app.get("/api/saved", function(req, res) {

  Note.find({})
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
app.post("/api/saved", function(req, res) {

  var newNote = new Note({
      title: req.body.title,
      date: req.body.date,
      url: req.body.url
  });
  console.log(req.body);

  newNote.save(function(err, doc){
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

    Note.findByIdAndRemove(req.params.id, 
    function(error, note){
      res.send({id: note._id});
    });
  });

// -------------------------------------------------

// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
