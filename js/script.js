'use strict';
(function () {
  var parseCarousel = function (map) {
    var results = document.querySelector(".main-carousel");
    var carouselTemplate = document.getElementById('template-carousel').innerHTML;
    Mustache.parse(carouselTemplate);
    var carouselItems = " ";

    for (var i = 0; i < carouselData.length; i++) {
      var objectData = Object.assign(carouselData[i], { index: i + 1 });
      new google.maps.Marker(
        { position: carouselData[i].coords, map: map }
      )
      carouselItems += Mustache.render(carouselTemplate, objectData);
    }

    var carouselList = Mustache.render(carouselItems);
    results.insertAdjacentHTML('beforeend', carouselList);
  }

  var initSlider = function () {
    var elem = document.querySelector('.main-carousel');
    var flkty = new Flickity(elem, {
      // options
      cellAlign: 'left',
      contain: true,
      pageDots: false
    });
    var progressBar = document.querySelector('.progress-bar')

    flkty.on('scroll', function (progress) {
      progress = Math.max(0, Math.min(1, progress));
      progressBar.style.width = progress * 100 + '%';
    });


    var buttonGroup = document.querySelector('.button-group');
    var buttons = buttonGroup.querySelectorAll('.button');
    buttons = fizzyUIUtils.makeArray(buttons);

    buttonGroup.addEventListener('click', function (event) {
      flkty.select(0);
    });
  }

  var initMap = function () {
    var uluru = { lat: 35.718, lng: 139.771 };
    var map = new google.maps.Map(
      document.getElementById('map'), { zoom: 2, center: uluru }
    );
    parseCarousel(map);
    initSlider();
    var marker = new google.maps.Marker({ position: uluru, map: map });
  }


  initMap();
}());
