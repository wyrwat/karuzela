'use strict';

(function(){

  var carouselTemplate = document.getElementById('template-carousel').innerHTML;
  Mustache.parse(carouselTemplate);
  var carouselItems = " ";

  for( var i = 0; i < carouselData.length; i++) {
    carouselItems += Mustache.render(carouselTemplate, carouselData[i]); 
  }

  var carouselList = Mustache.render(carouselTemplate);

  results.insertAdjacentHTML('beforeend', carouselList);
})();

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