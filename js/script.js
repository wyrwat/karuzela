'use strict';

(function(){
  var results = document.querySelector(".main-carousel");
  var carouselTemplate = document.getElementById('template-carousel').innerHTML;
  Mustache.parse(carouselTemplate);
  var carouselItems = " ";

  for( var i = 0; i < carouselData.length; i++) {
    var objectData = Object.assign(carouselData[i], { index: i+1 });
    carouselItems += Mustache.render(carouselTemplate, objectData); 
  }

  var carouselList = Mustache.render(carouselItems);
  results.insertAdjacentHTML('beforeend', carouselList);
})();


window.initMap = function(){
    // The location of Uluru
    
    var uluru = {lat: 35.718, lng: 139.771};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  
}

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  pageDots: false
});

var buttonGroup = document.querySelector('.button-group');
var buttons = buttonGroup.querySelectorAll('.button');
buttons = fizzyUIUtils.makeArray( buttons );

buttonGroup.addEventListener( 'click', function( event ) {
  flkty.select(0);
});