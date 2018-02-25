import { TweenMax } from 'gsap';
import { scrollMagic } from 'scrollmagic';
import {
  $document as $doc,
  $window as $win
} from '../modules/dev/_helpers';

let tl = new TimelineMax();
//
tl
  .fromTo('.loader__inside', 2, {scale: 0}, {scale: 1, onComplete: () => {
    $('.loader').remove();
  }})
  .fromTo('h1', 1, { x: -100, opacity: 0 }, { x: 0, opacity: 1})
  .from('h2', 1, {x: 100, opacity: 0}, '-=0.7')
  .from('.link-video', 1, {x: 100, opacity: 0}, '-=0.5')
  .fromTo('.logo', 1, { y: -100, opacity: 0 }, { y: 0, opacity: 1}, '-=0.5')
  .fromTo('.lang-wrapper', 1, {y: -100, opacity: 0}, { y: 0, opacity: 1}, '-=0.7')
  .staggerFromTo('.nav li', 0.5, { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, 0.03)
  .from('.scroll-down-btn', 1, {y: 100, opacity: 0}, '-=0.5');
//