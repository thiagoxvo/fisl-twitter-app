var matrixSize = 9;

var buildImageTag = function(){
  var timestamp = Date.now();
  var imgUrl = "http://lorempixel.com/72/72/?" + timestamp;
  return '<img src="'+ imgUrl +'">';
}

var loadHiddenImage = function( imageTag ){
  $('.preload').append(imageTag);
};

var getLoadedImage = function(){
  return $('.preload img').detach();
}

setInterval(function(){
  var position = Math.floor(Math.random() * matrixSize) + 1
  console.log(position);
  var img = getLoadedImage();
  
  loadHiddenImage(buildImageTag());
  
  img.addClass('animated zoomIn');
  $('td[data-position="'+ position +'"]')
    .empty()
    .html(img);
},1000);