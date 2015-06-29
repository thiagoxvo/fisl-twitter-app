var matrixSize = 50; //3x3
var pixelSize = 24; //50px
var mappedMatrix = ['0-1','2-2', '3-1', '4-2'];
var selectedPositions = [];

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
  var position = Math.floor(Math.random() * mappedMatrix.length);
  return mappedMatrix[position];
}

$('.full-screen').click(function(){
  if (screenfull.enabled) {
      screenfull.request();
  }
});

$('.pixel').click(function(){
  var element = $(this);
  var position = element.data('position');
  console.log(position);
  selectedPositions.push(position);
  element.addClass('pixel-map');
  console.log(selectedPositions);
});

setInterval(function(){
  var position = randomPosition();
  console.log(position);
  var img = getLoadedImage();
  
  loadHiddenImage(buildImageTag());
  
  img.addClass('animated zoomIn');
  $('div[data-position="'+ position +'"]')
    .empty()
    .html(img);
},1000);