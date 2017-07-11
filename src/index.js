require('./productCard/reviews/index.js');
// require('./productCard/js/productCard.js');
// require('./elements/dropList/dropList.js');
require('./elements/pigPrintsCarousel/pigPrintsCarousel.js');
require('./advantages/index.js');

require('./catalog/catalog.js');

var owlCarousel = require('./js/owl.carousel.min.js');
owlCarousel.constructor();
class Carousels {
  constructor() {
    this.desktopOtherClothes = document.querySelector('.productCard__printOnOtherClothes-carousel');
    this.arrow = '<svg viewBox="0 0 48 48"><use xlink:href="#icon-arrow"></use></svg>';
    this.initDesktopCarouselOtherClothes();
    this.initMobileCarouselBaseImages();
  }
  initDesktopCarouselOtherClothes() {
    $('.productCard__printOnOtherClothes-carousel').owlCarousel({
      navText:[this.arrow,this.arrow],
      responsive: {
        0:{
          items: 4
        },
        400: {
          items: 5
        },
        600: {
          items:6
        },
        1000: {
          items:5
        }
      }

    });
  }
  initMobileCarouselBaseImages() {

    $('.productCard__imageContainer-carousel').owlCarousel({
      navText:[this.arrow,this.arrow],
      responsive: {
        0:{
          items: 1
        }
      },
      callbacks: true,
      onInitialized: function() {
        var  nav = document.querySelector('.productCard__imageContainer-carousel .owl-nav');
        var dots = document.querySelector('.productCard__imageContainer-carousel .owl-dots');
        var next = document.querySelector('.productCard__imageContainer-carousel .owl-next');
        nav.insertBefore(dots,next);
      }
    });
  }

}
document.addEventListener('DOMContentLoaded',()=>{
  new Carousels();
});
