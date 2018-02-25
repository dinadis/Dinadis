import {
  $window,
  currentPage
} from '../modules/dev/_helpers'
import { TimelineLite } from 'gsap'
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
var header = $('header');

if ( $('.about').length ) {
  let scrollAnchor = $('.about')[0];
  let posTop = scrollAnchor.offsetTop;
  let tl = new TimelineLite();
  let scrollBtn = $('.scroll-down-btn');

  scrollBtn.on('click', (e) => {
    e.preventDefault();
    TweenLite.to(window, 2, {
      scrollTo: (posTop - header.outerHeight() ),
      ease: Power3.easeOut
    });
  })

}

if ( $('.contact-form').length ) {
  let formTop = $('.contact-form')[0].offsetTop;
  let contactUs = $('.contact-us-btn');
  console.log(formTop);
  contactUs.on('click', (e) => {
    e.preventDefault();
    TweenLite.to(window, 2, {
      scrollTo: (formTop - header.outerHeight() ),
      ease: Power3.easeOut
    });
  })
}

if ( currentPage === 'home' ) {
  let serviceBtn = $('.services-btn');
  let servicesTop = $('section.services')[0].offsetTop;
  serviceBtn.on('click', (e) => {
    e.preventDefault();
    TweenLite.to(window, 2, {
      scrollTo: servicesTop,
      ease: Power3.easeOut
    });
  })
}