import {
  $document as $doc,
  $window as $win
} from '../modules/dev/_helpers';

$doc.ready( () => {
  const HEADER = $('header');
  let scrollTop = $win.scrollTop();
  $win.on('scroll', () => {
    let currentOffsetFromGallery = ( $('.gallery').offset().top -  $win.scrollTop() );
    let delta = $win.outerHeight() * 0.3;
    scrollTop = $win.scrollTop();
    scrollTop > $win.outerHeight() / 2 ? HEADER.addClass('header-scroll') : HEADER.removeClass('header-scroll'); // add or remove additional class
    if ( Math.abs( currentOffsetFromGallery ) < delta ) {
      TweenLite.to(window, 0.5, {
        scrollTo: $('.gallery').offset().top,
        ease: Power1.easeOut
      });
    }
  });

})