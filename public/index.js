var matrixSize = 50; //3x3
var pixelSize = 50; //50px

var buildMatrix = function() {
  var tag = "";
  var $container = $('.pixel-container');
  for( var i = 0; i < matrixSize; i++) {
    var left = "left:" + (i * pixelSize) + "px;";
    // tag = '<div class="pixel" style="'+ left +'""></div>';
    for( var j = 0; j < matrixSize; j++) {
      var top = "top:" + (j * pixelSize) + "px;";
      tag = '<div class="pixel" style="'+ top + left +'""></div>';
      $container.append(tag);   
    }
  }  
};
buildMatrix();

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

// setInterval(function(){
  var position = Math.floor(Math.random() * matrixSize) + 1
  console.log(position);
  var img = getLoadedImage();
  
  loadHiddenImage(buildImageTag());
  
  img.addClass('animated zoomIn');
  $('td[data-position="'+ position +'"]')
    .empty()
    .html(img);
// },1000);