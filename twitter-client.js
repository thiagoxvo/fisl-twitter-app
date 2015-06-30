var Twitter = require('twitter-node-client').Twitter;

var config = {
    "consumerKey": "",
    "consumerSecret": "",
    "accessToken": "",
    "accessTokenSecret": ""
}

var twitter = new Twitter(config);

var error = function (err, response, body) {
  console.log('ERROR [%s]', err);
};

var getMiniImage = function(imageName) {
  return imageName.replace("_normal", "_mini");
}

var searchHashtag = function(callback){
  twitter.getSearch({'q':'#copaamerica2015','count': 100}, error, function(data){
    var tweets = JSON.parse(data)["statuses"];
    var images = tweets.map(function(item) {
      return getMiniImage(item["user"].profile_image_url); 
    });
    callback.call(this, images);
  });
}

module.exports.searchHashtag = searchHashtag;

