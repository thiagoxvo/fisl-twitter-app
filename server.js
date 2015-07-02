var twitter = require("./twitter-client");
var express = require("express"),
    app = express(),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    methodOverride = require('method-override'),
    hostname = process.env.HOSTNAME || 'localhost',
    publicDir = process.argv[2] || __dirname + '/public';

app.set('port', (process.env.PORT || 4567));

app.get("/", function (req, res) {
  res.redirect("/index.html");
});

app.get("/images", function(req, res){
  twitter.searchHashtag(function(data){
    res.json({images:data});
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

console.log("Simple static server showing %s listening at http://%s:%s", publicDir, hostname, port);
app.listen(port, hostname);