import 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js';
import { TweenMax } from 'gsap';
// const ScrollMagic = require('ScrollMagic');
import * as ScrollMagic from 'scrollmagic';
// import 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min';
// import 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js';
// include 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
// import * as animationGsap from 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min';
//


// const TimelineMax = require('TimelineMax');
import {
  $document as $doc,
  $window as $win
} from '../modules/dev/_helpers';

// let tlscroll = new TimelineMax();

// let scene = new ScrollMagic.Scene({
//   triggerElement: '.animated'
// })
//   tlscroll.from('.animated', 1, {x: 100, opacity: 0}, '-=0.7');
//   scene.addTo(controller);



let tl = new TimelineMax();

//
tl
  .from('.loader__inside', 2, { delay: 1, scale: 0, onComplete: () => {
    $('.loader').remove();
  }})
  .fromTo('h1', 1, { x: -100, opacity: 0 }, { x: 0, opacity: 1 }, '-=0.7')
  .from('h2', 1, { x: 100, opacity: 0 }, '-=0.7')
  .from('a.link-video', 1, { y: 50, opacity: 0 }, '-=0.5')
  .fromTo('.logo', 1, { y: -100, opacity: 0 }, { y: 0, opacity: 1 }, '-=1')
  .fromTo('.lang-wrapper', 1, { y: -100, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.7')
  .staggerFromTo('.nav li', 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, 0.03)
  .from('.scroll-down-btn', 1, { y: 100, opacity: 0 }, '-=0.5')
  .staggerFrom('.breadcrumb li', 1, { y: 50, opacity: 0 }, 0.3, '-=0.5');


let controller = new ScrollMagic.Controller();
$('h3, h4, p, img, .btn, .services__item li').each(function(){
  var currentElem = $(this)[0];


  var tweenArticle = new TimelineMax()
  // .from(currentElem, 3, {opacity:0, top:'-40px', ease: Power4.easeOut}, 0)
    .from(currentElem, 1, {delay: 0.2, y: 50, opacity: 0, ease: Back.easeOut.config(1.5) } );

  var scene = new ScrollMagic.Scene({ triggerElement: currentElem, triggerHook: 1 })
    .setTween(tweenArticle)
    .addTo(controller);

});
//