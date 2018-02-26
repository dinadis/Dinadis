import { TweenMax } from 'gsap';
// import { ScrollMagic } from 'scrollmagic';
const ScrollMagic = require('ScrollMagic');
// const TimelineMax = require('TimelineMax');
import {
  $document as $doc,
  $window as $win
} from '../modules/dev/_helpers';

// let tlscroll = new TimelineMax();
// let controller = new ScrollMagic.Controller();
// let scene = new ScrollMagic.Scene({
//   triggerElement: '.animated'
// })
//   tlscroll.from('.animated', 1, {x: 100, opacity: 0}, '-=0.7');
//   scene.addTo(controller);

let tl = new TimelineMax();

//
tl
  .from('.loader__inside', 2, {delay: 1, scale: 0, onComplete: () => {
    $('.loader').remove();
  }})
  .fromTo('h1', 1, { x: -100, opacity: 0 }, { x: 0, opacity: 1}, '-=0.7')
  .from('h2', 1, {x: 100, opacity: 0}, '-=0.7')
  .from('h3', 1, {x: 100, opacity: 0}, '-=0.7')
  .from('h4', 1, {x: 100, opacity: 0}, '-=0.7')
  .from('p', 1, {x: 100, opacity: 0}, '-=0.7')
  .from('.link-video', 1, {x: 100, opacity: 0}, '-=0.5')
  .fromTo('.logo', 1, { y: -100, opacity: 0 }, { y: 0, opacity: 1}, '-=0.5')
  .fromTo('.lang-wrapper', 1, {y: -100, opacity: 0}, { y: 0, opacity: 1}, '-=0.7')
  .staggerFromTo('.nav li', 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, 0.03)
  .from('.scroll-down-btn', 1, {y: 100, opacity: 0}, '-=0.5')
  .staggerFrom('.breadcrumb li', 1, {y: 50, opacity: 0}, 0.3, '-=0.5');
//