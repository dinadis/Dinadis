import 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js';
import { TweenMax } from 'gsap';
import * as ScrollMagic from 'scrollmagic';
import {
  $document,
  $window
} from '../modules/dev/_helpers'

let tl = new TimelineMax();

// First screen animation
if ( $window.width() < 768 ) {
  $('.full-video').remove();
}
$document.ready( () => {
  let windowHeight = $window.innerHeight();
  $('.slider-section').css( {'min-height': `${windowHeight}px`} );
  runAnimation();
} )

var runAnimation = () => {
  tl
    .from('.loader__inside', 1, { delay: 1, x: '-100%', ease: Power4.easeOut})
    .staggerTo('.loader', 1, { x: '100%', ease: Power4.easeOut, onComplete: () => {
      $('.loader').remove();
    }}, 2)
    .fromTo('h1', 1, { x: -100, opacity: 0 }, { x: 0, opacity: 1 }, '-=0.7')
    .from('h2', 1, { x: 100, opacity: 0 }, '-=0.7')
    .from('a.link-video', 1, { y: 50, opacity: 0 }, '-=0.5')
    .fromTo('.logo', 1, { y: -100, opacity: 0 }, { y: 0, opacity: 1 }, '-=1')
    .fromTo('.lang-wrapper', 1, { y: -100, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.7')
    .staggerFromTo('.nav li', 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, 0.03)
    .from('.scroll-down-btn', 1, { y: 100, opacity: 0 }, '-=0.5')
    .staggerFrom('.breadcrumb li', 1, { y: 50, opacity: 0 }, 0.3, '-=0.5');
}


if ( $window.width() > 1024 ) {

  // Show elements on scroll
  let controller = new ScrollMagic.Controller();
  let controllerLetter = new ScrollMagic.Controller();

  $('h3, h4, p, .services-slider, .about img, .filter-img, .btn, .services__item ul, .tabs, .desc-block img').each(function(){
    let currentElem = $(this)[0];

    let tweenArticle = new TimelineMax()
      .from(currentElem, 1, {delay: 0.2, y: 50, opacity: 0, ease: Back.easeOut.config(1.5) } );

    let scene = new ScrollMagic.Scene({
      triggerElement: currentElem,
      triggerHook: 1
    })
      .setTween(tweenArticle)
      .addTo(controller);
  });
}

