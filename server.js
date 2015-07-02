var twitter = require("./twitter-client");
var express = require("express"),
    app = express(),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    methodOverride = require('method-override'),
    hostname = process.env.HOSTNAME || 'localhost',
    publicDir = process.argv[2] || __dirname + '/public';

var hashtag = "#thoughtworks";

app.set('port', (process.env.PORT || 4567));

app.get("/", function (req, res) {
  hashtag = "#" + req.query.hashtag;
  res.redirect("/index.html");
});

app.get("/images", function(req, res){
  twitter.searchHashtag(hashtag, function(data){
    res.json(data);
  });
});

app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(publicDir));
app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}));

app.listen(app.get('port'), function() {
  console.log("Node app is running on port:" + app.get('port'))
});