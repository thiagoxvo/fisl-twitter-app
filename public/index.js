var matrixSize = 50; //3x3
var pixelSize = 50; //50px
var mappedMatrix = ['0-1','2-2', '3-1'];

var totalColumns = 53;
var totalRows = 30;

var paintSelectedPositions = function(){
  mappedMatrix.forEach(function(item){
    $("span[data-position='"+ item +"']").addClass('pixel-map');
  });
}

var appendCellsToRow = function (rowIndex) {
  var $rowElement = $('<div class="row"></div>');

  for (var columnIndex = 0; columnIndex < totalColumns; ++columnIndex) {
    var dataPosition = rowIndex + '-' + columnIndex;
    $rowElement.append('<span class="cell" data-position="' + dataPosition + '"></span>');
  };

  return $rowElement;
};

var buildMatrix = function () {
  var $container = $('.pixel-container');
  var cell = "";

  for (var rowIndex = 0; rowIndex < totalRows; ++rowIndex) {
    var rowElement = appendCellsToRow(rowIndex);
    $container.append(rowElement);
  };
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
