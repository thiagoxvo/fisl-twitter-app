var images = [];

var oceanPositions = ['1-25', '2-28', '3-26', '4-25', '4-27', '4-29', '5-21', '5-22', '5-24', '5-25', '5-26', '5-28', '5-29', '6-22', '6-23', '6-24', '6-25', '6-26', '6-27', '7-22', '7-23', '7-24', '7-25', '7-26', '7-27', '7-28', '8-22', '8-23', '8-24', '8-25', '8-26', '8-27', '8-28', '8-30', '8-33', '8-36', '9-21', '9-22', '9-23', '9-24', '9-25', '9-26', '9-27', '9-31', '9-32', '10-20', '10-21', '10-22', '10-23', '10-24', '10-25', '10-26', '10-32', '10-33', '10-36', '11-20', '11-21', '11-22', '11-23', '11-24', '11-25', '11-26', '11-34', '11-35', '11-37', '12-16', '12-20', '12-21', '12-22', '12-23', '12-24', '12-25', '12-26', '13-15', '13-17', '13-19', '13-20', '13-21', '13-22', '13-23', '13-24', '13-25', '13-26', '14-16', '14-17', '14-18', '14-23', '14-24', '14-25', '14-26', '14-27', '14-28', '14-35', '14-36', '15-16', '15-17', '15-18', '15-25', '15-26', '15-27', '15-28', '15-29', '15-30', '15-35', '15-38', '16-14', '16-17', '16-18', '16-25', '16-26', '16-27', '16-28', '16-29', '16-30', '16-35', '16-36', '17-16', '17-17', '17-18', '17-19', '17-25', '17-26', '17-27', '17-28', '17-29', '17-30', '17-34', '17-35', '17-38', '18-16', '18-17', '18-18', '18-19', '18-24', '18-25', '18-26', '18-27', '18-28', '18-29', '18-30', '18-34', '18-36', '19-14', '19-18', '19-19', '19-23', '19-24', '19-25', '19-26', '19-27', '19-28', '19-29', '19-30', '19-31', '19-33', '19-34', '19-35', '20-17', '20-18', '20-19', '20-23', '20-24', '20-25', '20-26', '20-27', '20-28', '20-29', '20-30', '20-31', '20-32', '20-33', '20-34', '20-37', '21-18', '21-20', '21-23', '21-24', '21-25', '21-26', '21-27', '21-28', '21-29', '21-30', '21-31', '21-32', '21-33', '21-34', '22-19', '22-20', '22-22', '22-23', '22-24', '22-25', '22-26', '22-27', '22-28', '22-29', '22-30', '22-31', '22-36', '23-16', '23-21', '23-22', '23-23', '23-24', '23-25', '23-26', '23-27', '23-28', '23-29', '23-30', '23-31', '23-32', '23-34', '24-19', '24-21', '24-24', '24-25', '24-26', '24-27', '24-28', '25-24', '25-27', '25-31', '26-25', '27-24', '28-26'];
var continentsPositions = ['3-22', '3-31', '4-20', '4-24', '5-23', '5-30', '5-31', '5-33', '6-17', '6-21', '6-28', '6-29', '6-30', '6-32', '7-19', '7-20', '7-21', '7-29', '7-30', '7-31', '7-34', '8-18', '8-20', '8-21', '8-29', '8-31', '8-32', '9-16', '9-18', '9-19', '9-20', '9-28', '9-29', '9-30', '9-33', '9-34', '9-35', '10-17', '10-18', '10-19', '10-27', '10-28', '10-29', '10-30', '10-31', '10-34', '10-35', '11-16', '11-17', '11-18', '11-19', '11-27', '11-28', '11-29', '11-30', '11-31', '11-32', '11-33', '12-17', '12-18', '12-19', '12-27', '12-28', '12-29', '12-30', '12-31', '12-32', '12-33', '12-34', '12-35', '12-36', '13-18', '13-27', '13-28', '13-29', '13-30', '13-31', '13-32', '13-33', '13-34', '13-35', '14-19', '14-20', '14-21', '14-22', '14-29', '14-30', '14-31', '14-32', '14-33', '14-34', '15-19', '15-20', '15-21', '15-22', '15-23', '15-24', '15-31', '15-32', '15-33', '15-34', '16-19', '16-20', '16-21', '16-22', '16-23', '16-24', '16-31', '16-32', '16-33', '16-34', '17-20', '17-21', '17-22', '17-23', '17-24', '17-31', '17-32', '17-33', '17-35', '18-20', '18-21', '18-22', '18-23', '18-31', '18-32', '18-33', '19-20', '19-21', '19-22', '19-32', '20-20', '20-21', '20-22', '21-21', '21-22', '22-21', '24-23', '24-29', '24-30', '25-23', '25-28', '26-22', '26-29'];

var totalColumns = 53;
var totalRows = 30;
var lastRendered = 'continent';

var paintingTheOceans = function(){
  oceanPositions.forEach(function(item){
    $("span[data-position='"+ item +"']").addClass('ocean');
  });
};

var paintingTheContinents = function(){
  continentsPositions.forEach(function(item){
    $("span[data-position='"+ item +"']").addClass('continent');
  });
};

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

  paintingTheOceans();
  paintingTheContinents();
};
buildMatrix();

var buildImageTag = function(){
  var position = Math.floor(Math.random() * images.length);
  var imgUrl = images.splice(position, 1)[0];
  return '<img src="'+ imgUrl +'">';
}

var loadHiddenImage = function( imageTag ){
  $('.preload').append(imageTag);
};

var getLoadedImage = function(){
  return $('.preload img').detach();
}

var randomPosition = function(){
  if(lastRendered === 'ocean'){
    lastRendered = 'continent';
     var position = Math.floor(Math.random() * continentsPositions.length);  
    return continentsPositions[position];
  } else {
    lastRendered = 'ocean';
    var position = Math.floor(Math.random() * oceanPositions.length);
    return oceanPositions[position];
  }
}

//Full screen
document.addEventListener(screenfull.raw.fullscreenchange, function () {
  $('.full-screen').toggle(!screenfull.isFullscreen);
});

$('.full-screen').click(function(){
  if (screenfull.enabled) {
    screenfull.request();
  }
});

$('.cell').click(function(){
  $(this).empty();
});

//Retrieve images from twitter
var getImages = function(){
  $.ajax({
    type: 'GET',
    contentType: 'application/json',
    url: 'http://localhost:4567/images',
    success: function(data){
      images = images.concat(data.images);
      console.log(images.length);
    }
  });
}
getImages();
setInterval(getImages, 60000 );

//Create a small delay to render first images
setTimeout(function(){
  setInterval(function(){
    var position = randomPosition();
    var img = getLoadedImage();
    
    loadHiddenImage(buildImageTag());
    
    img.addClass('animated zoomIn');
    $('span[data-position="'+ position +'"]')
      .empty()
      .html(img);
  },500)
}, 5000);