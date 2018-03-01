import {
  $window,
  currentPage
} from '../modules/dev/_helpers'
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

let scrollToElem = (btnClass, elemClass) => {
  if ( $('.' + elemClass + '').length ) { // does elem exist
    let $btn = $('.' + btnClass ); // get btn
    let scrollElemOffset = $('.' + elemClass + '')[0].offsetTop; // get scroll distance
    let headerHeight = $('header').outerHeight(); // get header height
    // btn on click event
    $btn.on('click', (e) => {
      e.preventDefault(); // prevent default
      // gsap scroll animation
      TweenLite.to(window, 2, {
        scrollTo: ( scrollElemOffset - headerHeight ),
        ease: Power3.easeOut
      });
    });
  }
}
scrollToElem('scroll-down-btn', 'about');
scrollToElem('contact-us-btn', 'contact-form');

// services anchor scroll
let serviceBtn = $('.services-btn'); // get btn
serviceBtn.on('click', (e) => {
  // scroll to service function
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
    window.location = 'home.html#services';
  }
});
if ( window.location.hash === '#services' && currentPage === 'home' ) {
  if ( $('.services').length ) {
    let servicesTop = $('section.services')[0].offsetTop;
    setTimeout( () => {
      TweenLite.to(window, 3, {
        scrollTo: servicesTop,
        ease: Power3.easeInOut
      });
    }, 2000 )
  }
}
