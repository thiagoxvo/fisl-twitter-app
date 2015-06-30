var request = require('request');
// Twitter OAuth
var oauth = {
  consumer_key: 'consumer_key',
  consumer_secret: 'consumer_secret',
  token: 'token',
  token_secret: 'token_secret'
};

var loadImagesFromTwitter = function() {
  //hashtag #TW, defined in the query
  var requestOptions = {
    url: 'https://api.twitter.com/1.1/search/tweets.json?q=%23TW',
    headers: { 'Accept-Charset': 'ISO-8859-1,utf-8' },
    oauth: oauth
  };

  request.get(requestOptions, function(err, res, body) {
    if (err) { throw err; }

    console.log('photo status update: ', res.statusCode);
    if(res.statusCode == 200) {
      console.log('Body: ', body);
      var info = JSON.parse(body);
    }
  });
}

loadImagesFromTwitter();