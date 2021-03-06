var Twitter = require('twitter-node-client').Twitter;

var config = {
  consumerKey: process.env.CONSUMER_KEY || 'consumer_key',
  consumerSecret: process.env.CONSUMER_SECRET || 'consumer_secret',
  accessToken: process.env.TOKEN || 'token',
  accessTokenSecret: process.env.TOKEN_SECRET || 'token_secret'
}
var twitter = new Twitter(config);

var error = function (err, response, body) {
  console.log(err);
};

var getMiniImage = function(imageName) {
  return imageName.replace("_normal", "_mini");
}

var searchHashtag = function(hashtag, callback) {
  twitter.getSearch({'q': hashtag,'count': 100}, error, function(data){
    var tweets = JSON.parse(data)["statuses"];
    var images = tweets.map(function(item) {
      return getMiniImage(item["user"].profile_image_url); 
    }).filter(function(value, index, self){
      return self.indexOf(value) === index;
    });
    callback.call(this, { hashtag: hashtag, images: images });
  });
}

module.exports.searchHashtag = searchHashtag;

