import { slick } from 'slick-carousel';
import {
    $document as $doc,
    $window as $win
} from '../modules/dev/_helpers';

$doc.ready( () => {

  if ( $('.slider-full-vertical').length ) {
    // full-section slider
    let sliderSpeed = 4000;

    $('.slider-full-vertical').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      arrows: true,
      nextArrow: $('.slick-full-next'),
      prevArrow: $('.slick-full-prev'),
      autoplay: true,
      autoplaySpeed: sliderSpeed,
      pauseOnHover: false,
      dots: true,
      customPaging : (slider, i) => {
        let correctIndex = i + 1;
        if ( correctIndex < 10 ) {
          return '<a class="slick-dot" href="#">0' + correctIndex + '</a>';
        } else {
          return '<a class="slick-dot" href="#">correctIndex</a>';
        }
      }
    });

    $('.slick-dots').wrap('<div class="container-dots"></div>')
    $doc.on('click', '.slick-dot', (e) => e.preventDefault() );
    // full-section slider

    // service slider
    $('.services-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      vertical: false,
      dots: true,
      customPaging : (slider, i) => {
        return '<a class="slick-dot" href="#"></a>';
      }
    });
  }

})
