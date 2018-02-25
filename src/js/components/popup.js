import { TweenMax } from 'gsap';
import {
  $body
} from '../modules/dev/_helpers'
let popupBody = $('.popup-body');
let popUpBg = $('.popup-bg');
let popUp = $('.popup');
let tl = new TimelineLite();
let closeBtn = $('.closeBtn');
let btn = $('.filter-content__item');

// initialize gsap animation
tl
  .from(popUpBg, 0.5, { opacity: 0, zIndex: -1 }) // show popup background
  .from(popupBody, 0.5, { x: '-100%', zIndex: -1, ease: Power2.easeOut }); // show popup body
// pause gsap
tl.pause();
// click on tour item
btn.on('click', (e) => {
  $('.popup').addClass('active-popup');
  // lock body scroll
  $body.addClass('lock');
  e.preventDefault();
  // play gsap animation
  tl.play();
})
// close popup function
function closePopup() {
  // reverse play gsap animation
  tl.reverse();
  setTimeout( () => {
    $('.popup').removeClass('active-popup');
    $body.removeClass('lock');
  }, 1000)
}
popUpBg.on('click', () => {
  closePopup();
})
closeBtn.on('click', () => {
  closePopup();
})