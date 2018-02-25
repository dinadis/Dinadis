import {
  $document as $doc,
  $window as $win
} from '../modules/dev/_helpers';

$doc.ready( () => {
  const $header = $('header');
  let scrollTop = $win.scrollTop();
  $win.on('scroll', () => {
    scrollTop = $win.scrollTop();
    scrollTop > $win.outerHeight() / 2 ? $header.addClass('header-scroll') : $header.removeClass('header-scroll');
  })

})