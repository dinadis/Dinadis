import {
  $window,
  currentPage
} from '../modules/dev/_helpers'
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// scroll down main page link
if ( $('.about').length ) {
  let scrollAnchor = $('.about')[0];
  let posTop = scrollAnchor.offsetTop;
  let scrollBtn = $('.scroll-down-btn');
  let header = $('header');

  scrollBtn.on('click', (e) => {
    e.preventDefault();
    TweenLite.to(window, 2, {
      scrollTo: (posTop - header.outerHeight() ),
      ease: Power3.easeOut
    });
  });

}

if ( $('.contact-form').length ) {
  let formTop = $('.contact-form')[0].offsetTop;
  let contactUs = $('.contact-us-btn');

  contactUs.on('click', (e) => {
    e.preventDefault();
    TweenLite.to(window, 2, {
      scrollTo: formTop,
      ease: Power3.easeOut
    });
  });

}
let serviceBtn = $('.services-btn');

serviceBtn.on('click', (e) => {

  var scrollToService = (servicesTop) => {
    TweenLite.to(window, 2, {
      scrollTo: servicesTop,
      ease: Power3.easeOut
    });
  }
  if ( currentPage === 'home' ) {
    e.preventDefault();
    let servicesTop = $('section.services')[0].offsetTop;
    scrollToService(servicesTop);
  } else {
    window.location = 'home.html#services'
  }
});
if ( window.location.hash === '#services' && currentPage === 'home' ) {
  if ( $('.services').length ) {
    let servicesTop = $('section.services')[0].offsetTop;
    setTimeout(() => {
      TweenLite.to(window, 3, {
        scrollTo: servicesTop,
        ease: Power3.easeInOut
      });
    }, 2000)
  }

}
