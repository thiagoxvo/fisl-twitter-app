var matrixSize = 50; //3x3
var pixelSize = 50; //50px
var mappedMatrix = ['0-1','2-2', '3-1'];

var paintSelectedPositions = function(){
  mappedMatrix.forEach(function(item){
    $("div[data-position='"+ item +"']").addClass('pixel-map');
  });
}

var buildMatrix = function() {
  var tag = "";
  var $container = $('.pixel-container');
  for( var i = 0; i < matrixSize; i++) {
    var left = "left:" + (i * pixelSize) + "px;";
    for( var j = 0; j < matrixSize; j++) {
      var top = "top:" + (j * pixelSize) + "px;";
      var position = i + "-" + j;
      tag = '<div class="pixel" data-position="'+ position + '"" style="'+ top + left +'""></div>';
      $container.append(tag);   
    }
  }
  paintSelectedPositions();    
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

var randomPosition = function(){
  var position = Math.floor(Math.random()*items.length);
  return mappedMatrix[position];
}

$('.full-screen').click(function(){
  if (screenfull.enabled) {
      screenfull.request();
  }
});

// setInterval(function(){
//   var position = Math.floor(Math.random() * matrixSize) + 1
//   console.log(position);
//   var img = getLoadedImage();
  
//   loadHiddenImage(buildImageTag());
  
//   img.addClass('animated zoomIn');
//   $('td[data-position="'+ position +'"]')
//     .empty()
//     .html(img);
// },1000);