import {
  $document as $doc,
  $window as $win
} from '../modules/dev/_helpers';

$doc.ready( () => {
  const HEADER = $('header'); // get header
  let scrollTop = $win.scrollTop(); // get window distance to top
  $win.on('scroll', () => { // add event listener to scroll
    scrollTop = $win.scrollTop(); // update scroll distance
    scrollTop > $win.outerHeight() / 2 ? HEADER.addClass('header-scroll') : HEADER.removeClass('header-scroll'); // add or remove additional class
  })

})